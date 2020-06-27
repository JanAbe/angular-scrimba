import { Component, OnInit } from "@angular/core";

import { ICustomer } from '../shared/interface';
import { DataService } from '../core/data.service';

@Component({
	selector: 'app-customers',
	templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
	title: string;
	people: ICustomer[];

	constructor(private dataService: DataService) { }
	
	ngOnInit(): void {
		this.title = 'customers component !!';
		this.dataService.getCustomers()
			.subscribe((customers: ICustomer[]) => this.people = customers);
	}
}