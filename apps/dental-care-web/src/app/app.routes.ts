import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      const mod = await import('./home/home.component');
      return mod.HomeComponent;
    },
  },
  {
    path: 'products',
    loadComponent: async () => {
      const mod = await import('./products/product.component');
      return mod.ProductComponent;
    },
  },
    {
    path: 'cart',
    loadComponent: async () => {
      const mod = await import('./cart/cart.component');
      return mod.CartComponent;
    },
  },
      {
    path: 'checkout',
    loadComponent: async () => {
      const mod = await import('./checkout/checkout.component');
      return mod.CheckoutComponent;
    },
  },
];