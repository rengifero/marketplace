import { afterNextRender, Component, inject } from '@angular/core';
import { ProductStore } from '../components/stores/product.store';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { CartStore } from '../components/stores/card.store';
import untilDestroyed from '../utils/untilDestroyed';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { Product } from '@prisma/client';
@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  searchTerm = '';
  productStore = inject(ProductStore);
  cartStore = inject(CartStore);
  searchSubject = new Subject<string>();
  destroyed = untilDestroyed();

  constructor() {
    this.productStore.loadProducts();
    afterNextRender(() => {
      this.searchSubject
        .pipe(debounceTime(500), distinctUntilChanged(), this.destroyed())
        .subscribe((term) => {
          console.log({ term });
          this.productStore.searchProducts(term);
        });
    });
  }

  onSearch(term: string) {
    this.searchSubject.next(term);
  }

  addToCart(product: Product) {
    this.cartStore.addToCart(product);
  }
}