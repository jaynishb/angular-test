import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerOrderService } from 'src/app/services/customer-order.service';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orders: any[];
  queryParams: any;
  loading: any;

  constructor(
    private route: ActivatedRoute,
    private service: CustomerOrderService
  ) {
    this.orders = [];
    this.queryParams = {};
    this.loading = false;
  }

  ngOnInit() {
    let { params, queryParams } = this.route.snapshot;
    this.queryParams = queryParams;
    this.loading = true;
    this.service.getOrders(params.customerID, queryParams)
      .subscribe(
        res => {
          this.orders = res;
          this.loading = false;
        },
        err => {
          this.orders = [];
          this.loading = false;
        }
      )
  }

  getOrderItemsTotal(items) {
    const total = items.reduce((acc, value) => {
      return {
        total_price: {
        amount: Number.parseFloat(acc.total_price.amount) + Number.parseFloat(value.total_price.amount)
        }
      };
    });
    return total.total_price.amount;
  }

  getOrderTotal(orders) {
    if (orders.length === 0) {
      return 0;
    }
    const total = orders.reduce((acc, value) => {
      return {
        charge_customer: {
        total_price: Number.parseFloat(acc.charge_customer.total_price) + Number.parseFloat(value.charge_customer.total_price)
        }
      };
    });
    return total.charge_customer.total_price;
  }

  getDateDiffInDays(firstDate, secondDate) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((new Date(firstDate).getTime() - new Date(secondDate).getTime())/(oneDay)));
  }

}
