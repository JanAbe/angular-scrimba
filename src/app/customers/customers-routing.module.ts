// you want to create a different routing module for each module.
// you can store everything in app-routing.module but that is not considered to be best practice.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
	{ path: 'customers', component: CustomersComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class CustomersRoutingModule {

}