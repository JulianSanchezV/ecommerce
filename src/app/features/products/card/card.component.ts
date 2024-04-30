import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import ProductsComponent from '../products.component';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    DataViewModule,
    CommonModule,
    ButtonModule,
    CardModule,
    ProductsComponent,
    CarouselModule,
    ProductsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}

