import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, MenuModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'All Products'
            },
            {
              label: 'Categories',
              items: [
                {
                  label: 'Electronics'
                },
                {
                  label: 'Jewerly'
                },
                {
                  label: 'Mens Clothing'
                },
                {
                  label: 'Womens Clothing'
                }
              ]
            }
        ];
    }

}
