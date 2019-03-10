import { Component, OnInit } from '@angular/core';
import { CustomerOrderService } from '../../services/customer-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-selection',
  templateUrl: './customer-selection.component.html',
  styleUrls: ['./customer-selection.component.scss']
})
export class CustomerSelectionComponent implements OnInit {

  customers: any[];
  today: any;
  selected: any;

  constructor(
    private service: CustomerOrderService,
    private router: Router
  ) {
    this.customers = [];
    const currentDate = new Date();
    this.today = { year: currentDate.getFullYear(), month: currentDate.getMonth(), day: currentDate.getDate() };
    this.selected = {
      customer: {},
      startDate: this.formatDate(new Date()),
      endDate: this.formatDate(new Date()),
    }
   }

  ngOnInit() {

    this.service.getCustomers()
      .subscribe(
        res => {
          console.log(res);
          this.customers = Array.isArray(res) ? res : [];
        },
        err => {
          this.customers = [];
        }
      );
  }

  formatDate(dateObject) {
    return `${dateObject.year}-${dateObject.month}-${dateObject.day}`;
  }

  showOrders() {
    console.log('selected ', this.selected);
    this.router.navigate([ '/', 'order', this.selected.customer ],
      { queryParams: { start_date: this.formatDate(this.selected.startDate), end_date: this.formatDate(this.selected.endDate) } });
  }

}
