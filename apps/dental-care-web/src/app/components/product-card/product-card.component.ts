import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '@prisma/client';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
  addToCart = output<Product>();


  
  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }
}