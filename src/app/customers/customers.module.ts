import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
		CustomersComponent,
		CustomersListComponent,
		FilterTextboxComponent
	],
    imports: [
		CommonModule,
		FormsModule,
		SharedModule,
		CustomersRoutingModule
	],
	exports: [ CustomersComponent ] // anybody that imports/uses this module gets access to the components specified here
})
export class CustomersModule { }
