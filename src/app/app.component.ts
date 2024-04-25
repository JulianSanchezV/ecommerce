import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { HeaderComponent } from './layout/header/header.component';
import { ProductsService } from '@api/products.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ecommerce';

  private readonly productSvc = inject(ProductsService);
  products = this.productSvc.products;

  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}





