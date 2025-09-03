import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'side-menu-header',
  imports: [],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHeaderComponent {
  envs = environment;
}
