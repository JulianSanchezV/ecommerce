import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@api/products.service';
import { Product } from '@shared/models/product.interface';

import { CardComponent } from './card/card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';




@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductsComponent,
    CommonModule,
    CardComponent,
    ButtonModule,
    CardModule,
    CarouselModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',

})

export default class ProductsComponent implements OnInit{

  productsList: Product[] = [];

  constructor(private productService: ProductsService) {}

  getProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.productsList = response;
      }
    )
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
