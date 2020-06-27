// this module is gonna hold all the stuff that can be shared throughout the app

import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
	declarations: [ CapitalizePipe ], // does declarations do anything? or does it just say: 'these components are part of this module'
	exports: [ CapitalizePipe ]
})
export class SharedModule { }