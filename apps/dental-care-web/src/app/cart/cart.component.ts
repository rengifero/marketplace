import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartStore } from '../components/stores/card.store';


@Component({
  selector: 'app-cart',
       standalone: true,
  imports: [CommonModule ,RouterLink, ],
  providers: [DecimalPipe] ,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartStore = inject(CartStore);
  myNumber: number;
  formattedValue: string;
  decimalPipe =inject( DecimalPipe);

 transformDecimal(num:number) {
    return this.decimalPipe.transform(num, '1.2-2');
  }
  updateQuantity(productId: string, event: Event) {
    const target = event.target as HTMLInputElement;
    const quantity = parseInt(target.value);
    if (quantity > 0) {
      this.cartStore.updateQuantity(productId, quantity);
    }
  }
}