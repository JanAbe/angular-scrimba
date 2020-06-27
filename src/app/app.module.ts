import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module'; 
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
	// a module declares which components are part of the module
    declarations: [
        AppComponent
	],
	// other modules we use
    imports: [
        BrowserModule,
		CustomersModule,
		OrdersModule,
		SharedModule,
		CoreModule,
		AppRoutingModule,
    ],
	// which component needs to be showed the first
    bootstrap: [AppComponent]
})
export class AppModule { }
