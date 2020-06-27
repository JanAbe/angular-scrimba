import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-filter-textbox',
	templateUrl: './filter-textbox.component.html'
})
export class FilterTextboxComponent implements OnInit {
	private _filter: string;
	@Input() get filter() { // an input property allows us to pass data into the class/component
		return this._filter;
	}

	set filter(value: string) {
		this._filter = value;
		this.changed.emit(this.filter); // emits the value of the_filter property to the parent
	}

	@Output() changed: EventEmitter<string> = new EventEmitter<string>(); // EventEmitter can be used to emit data from a child to a parent

	constructor() { 

	}

	ngOnInit(): void {

	}
}