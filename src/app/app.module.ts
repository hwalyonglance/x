import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { TableComponent } from './table/table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		FrontPageComponent,
		TableComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp({
			apiKey: "AIzaSyD5cZbgET1MeOa4KdUBiw16-dQ1nnRu-ug",
			authDomain: "belajar-angular-firebase.firebaseapp.com",
			databaseURL: "https://belajar-angular-firebase.firebaseio.com",
			projectId: "belajar-angular-firebase",
			storageBucket: "belajar-angular-firebase.appspot.com",
			messagingSenderId: "306098183481",
			appId: "1:306098183481:web:e70786ac2ae64075"
		}),
		AngularFireAuthModule,
		AngularFirestoreModule,
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		AppRoutingModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
