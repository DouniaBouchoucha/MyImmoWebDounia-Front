import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartLength: number = 0;
  isCollapsed: boolean = false;


  constructor( private cart: CartService) { }

  ngOnInit() {
    this.cart.currentCartLengthChanged.subscribe(
    res => this.cartLength = res
    );
    }

}
