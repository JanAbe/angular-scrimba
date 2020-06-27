import { Component, OnInit } from '@angular/core';

import { ICustomer, IOrder } from '../shared/interface'; 
import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
	orders: IOrder[] = [];
	customer: ICustomer;

	constructor(private dataService: DataService, 
				private route: ActivatedRoute) { }

	ngOnInit(): void {
		// make a snapshot of the current route -> then get the :id param from the url
		const customerId = +this.route.snapshot.paramMap.get('id'); // + transforms a string into a number
		
		this.dataService.getOrders(customerId).subscribe((orders: IOrder[]) => {
			this.orders = orders;
		});

		this.dataService.getCustomer(customerId).subscribe((customer: ICustomer) => {
			this.customer = customer;
		});
	}
}