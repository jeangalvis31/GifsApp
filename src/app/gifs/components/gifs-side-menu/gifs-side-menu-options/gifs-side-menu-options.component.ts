import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '../../../services/gifs.service';

interface MenuOption{
  
    icon: 'string';
    label: 'string';
    subLabel: 'string';
    route: 'string'; 
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrl: './gifs-side-menu-options.component.css'
})
export class GifsSideMenuOptionsComponent {

  gifService = inject(GifsService);


  menuOptions: MenuOption[] = [
    {
      icon: "fa-solid fa-chart-line" as 'string',
      label: "Trending" as 'string',
      subLabel: "Popular Gifs" as 'string', 
      route: "/dashboard/trending" as 'string'
    },
    {
      icon: 'fa-solid fa-magnifying-glass' as 'string',
      label: 'Search' as 'string',
      subLabel: 'Search' as 'string',
      route: '/dashboard/search' as 'string'
    },
  ];


}
