import { Component, OnInit, input } from '@angular/core';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import ProductsComponent from '../products.component';
import { ProductsService } from '@api/products.service';
import { Product } from '@shared/models/product.interface';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    ButtonModule,
    ProductsComponent,
    CommonModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent implements OnInit {

  productId = input<number>(0, {alias: 'id'});

  productsList: Product[] = [];
  product: any;

  constructor(private productService: ProductsService) {}

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      response => {
        this.product = response;
      },
      error => {
        console.error('Error fetching product', error);
      }
    );
  }

  ngOnInit(): void {
    this.getProductById(this.productId());
  }
}

