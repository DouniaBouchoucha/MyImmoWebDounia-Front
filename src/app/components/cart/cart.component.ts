import { Immo } from 'src/app/domain/immo';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


    data: Immo[] ;
    totalAmount = 0;
    constructor(private service: CartService) { }

    ngOnInit() {
      this.data = this.service.getCartImmo();
      this.totalAmount = this.service.getCartTotalAmount();
      console.log('#### Dans Cart Component - Taille de cart: ' + this.totalAmount);

    }
    order() {
      console.log('Your ordre has been process');
    }
  }

