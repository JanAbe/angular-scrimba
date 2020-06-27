import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/customers' }, // matches the route of the app, e.g. localhost:4200
	// or comment this out and the AppRoutingModule can imported in whatever place in app.module.
	// or leave it, but the AppRoutingModule must be imported last in the declaration in app.module.
	{ path: '**', pathMatch: 'full', redirectTo: '/customers' } // matches every path that is not to route, e.g. localhost:4200/something
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
