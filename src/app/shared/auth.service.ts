import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import * as firebase from 'firebase/app';

// const perf = firebase.performance();

import { DialogService } from './dialog.service';
import { Account } from './model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private _account = new BehaviorSubject<Account>(null);
	change$: BehaviorSubject<Account> = this._account;
	loggedIn = false;
	get account() {
		return this._account.getValue();
	}
	constructor(
		private afAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private _router: Router,
		private dialog: DialogService,
	) {
		afAuth.authState.subscribe(account => {
			if (account) {
				const acc = {
					id: account.uid,
					displayName: account.displayName,
					email: account.email,
					emailVerified: account.emailVerified,
					phone: String(account.phoneNumber || ''),
					photoURL: account.photoURL,
					// a: account.metadata.lastSignInTime,
				};
				afs.collection('accounts')
					.doc(acc.id)
					.snapshotChanges()
					.pipe(
						take(1),
						map(snapshot=>{
							return snapshot.payload.exists
							? this.afs.collection('accounts').doc(acc.id).update(acc)
							: this.afs.collection('accounts').doc(acc.id).set(acc);
						})
					)
					.subscribe(() => {
						this._account.next(acc);
					});
			}
		});
	}
	signOut() {
		let dialog = this.dialog.open('signOut');
		dialog.componentInstance.data.cancel.subscribe(_ => {
			dialog.close();
			dialog = null;
		});
		return dialog.componentInstance.data.accept
			.pipe(
				switchMap(a => {
					return from(this.afAuth.auth.signOut());
				})
			)
			.subscribe(_ => {
				dialog.close();
				dialog = null;
				this.loggedIn = false;
				this._account.next(null);
				this._router.navigate(['/']);
			});
	}
	private async _oAuthLogin(provider: firebase.auth.AuthProvider) {
		// const trace = perf.trace('userLogin');
		// trace.start();
		try {
			const credential = await this.afAuth.auth.signInWithPopup(provider);
			// console.log(credential)
			// trace.putAttribute('verified', `${credential.user.emailVerified}`);
			// trace.stop();
			return credential;
		} catch (error) {
			// trace.putAttribute('errorCode', error.code);
			// trace.stop();
			let dialog = this.dialog.open('error', {
				error
			});
			dialog.componentInstance.data.accept.subscribe(() => {
				dialog.close();
				dialog = null;
			});
		}
	}
	////// OAuth Methods /////
	googleLogin() {
		return this._oAuthLogin(new firebase.auth.GoogleAuthProvider());
	}
	githubLogin() {
		return this._oAuthLogin(new firebase.auth.GithubAuthProvider());
	}
	facebookLogin() {
		return this._oAuthLogin(new firebase.auth.FacebookAuthProvider());
	}
	twitterLogin() {
		return this._oAuthLogin(new firebase.auth.TwitterAuthProvider());
	}
	anonymousLogin(): Observable<firebase.auth.UserCredential> {
		return from(this.afAuth.auth.signInAnonymously());
	}
	emailSignUp(
		email: string,
		password: string
	): Observable<firebase.auth.UserCredential> {
		return from(
			this.afAuth.auth.createUserWithEmailAndPassword(email, password)
		);
	}
	emailLogin(
		email: string,
		password: string
	): Observable<firebase.auth.UserCredential> {
		return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
	}
	resetPassword(email: string): Observable<void> {
		return from(firebase.auth().sendPasswordResetEmail(email));
	}
	state() {
		return this.afAuth.authState;
	}
	hasRole(roles: string[], op: '&&' | '||' = '||') {
		if (this.account) {
			const result = [];
			for (const role of this.account.roles) {
				if (op === '&&') {
					if (!roles.includes(role)) return false;
				} else if (op === '||') {
					result.push(roles.includes(role))
				}
			}
			return result.some(c=>c);
		}
		return false;
	}
}
