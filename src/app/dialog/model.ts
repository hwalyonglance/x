import { EventEmitter } from '@angular/core';

export interface SharedDialog {
	accept: EventEmitter<any>;
	cancel: EventEmitter<any>;
	error?: any;
	title?: string;
	text?: string;
	cancelBtnText?: string;
	acceptBtnText?: string;
}