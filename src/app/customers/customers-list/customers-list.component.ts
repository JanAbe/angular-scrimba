import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interface';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
	selector: 'app-customers-list',
	templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
	private _customers: ICustomer[] = [];
	@Input() get customers(): ICustomer[] {
		return this._customers;
	}

	set customers(value: ICustomer[]) {
		if (value) {
			this.filteredCustomers = this._customers = value;
			this.calculateOrders();
		}
	}

	filteredCustomers: ICustomer[] = [];
	customersOrderTotal: number;
	currencyCode: string = 'EUR';

	constructor(private sorterService: SorterService) { }

	ngOnInit(): void {

	}

	calculateOrders(): void {
		this.customersOrderTotal = 0;
		this.filteredCustomers.forEach((c: ICustomer) => {
			this.customersOrderTotal += c.orderTotal;
		});
	}

	filter(data: string) {
		if (data) {
			this.filteredCustomers = this.customers.filter((c: ICustomer) => {
				return c.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
					c.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
					c.orderTotal.toString().indexOf(data) > -1;
			});
		} else {
			this.filteredCustomers = this.customers;
		}
		
		this.calculateOrders();
	}

	sort(prop: string): void {
		this.sorterService.sort(this.filteredCustomers, prop);
	}
}