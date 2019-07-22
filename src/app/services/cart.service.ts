import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Immo } from '../domain/immo';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData: Immo[] = [];

  private messageSource = new BehaviorSubject(0);
  currentCartLengthChanged = this.messageSource.asObservable();

  constructor() { }

  addToCart(immo: Immo): void {
     // Test if the product is already in the cart
      if (this.cartData.indexOf(immo) === -1) {
        this.cartData.push(immo);
        this.messageSource.next(this.cartData.length);
   }
}
getCartImmo(): Immo[] {
 return this.cartData;
}
getCartLength(): number {
 return this.cartData.length;
}
getCartTotalAmount(): number {
 let total = 0;
 this.cartData.forEach( record => total += record.price);
 return total;
}
resetCart(): void {
 this.cartData = [];
}
}



