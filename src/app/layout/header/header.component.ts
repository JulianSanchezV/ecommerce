import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }

}
