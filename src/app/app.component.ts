import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';


import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { HeaderComponent } from './layout/header/header.component';
import { CommonModule } from '@angular/common';
import ProductsComponent from '@features/products/products.component';
import DetailsComponent from '@features/products/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    HeaderComponent,
    ProductsComponent,
    DetailsComponent,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ecommerce';

  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}





