import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerSelectionComponent } from './components/customer-selection/customer-selection.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerSelectionComponent },
  { path: 'order/:customerID', component: OrderDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
