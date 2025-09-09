import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'side-menu',
  imports: [MenuHeaderComponent, MenuOptionsComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {}
