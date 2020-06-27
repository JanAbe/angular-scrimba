import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
	template: `
		<router-outlet></router-outlet>
    `
    // templateUrl: './app.component.html',
    // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}
