import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartStore } from '../components/stores/card.store';


@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  cartStore = inject(CartStore);
  //stripeService = inject(StripeService);

  checkout() {
    //this.stripeService.createCheckoutSession().subscribe(({ url }) => {
     // location.href = url;
    //});
  }
}