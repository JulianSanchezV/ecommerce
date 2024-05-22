import { Component } from '@angular/core';
import { Product } from '@shared/models/product.interface';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import ProductsComponent from '../products.component';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    ButtonModule,
    ProductsComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent {
product: any;

}

