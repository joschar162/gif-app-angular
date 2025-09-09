import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from 'src/app/gifs/services/gifs.service';

interface MenuOption {
  icon: string;
  label: string;
  subLabel: string;
  route: string;
}
@Component({
  selector: 'side-menu-options',
  imports: [RouterLink, RouterLink, RouterLinkActive],
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.css',
})
export class MenuOptionsComponent {
  gifsService = inject(GifsService);

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trading',
      subLabel: 'Gifs populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];
}
