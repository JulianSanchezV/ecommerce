import { CommonModule, SlicePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
import { ProductsService } from '@api/products.service';
import { Product } from '@shared/models/product.interface';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    SlicePipe,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',

})

export default class ProductsComponent implements OnInit{

  productsList: Product[] = [];
  products: any;

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

  @Output() addToCartEvent = new EventEmitter<Product>();

  onAddToCart(): void {
    this.addToCartEvent.emit(this.products);
  }
}
