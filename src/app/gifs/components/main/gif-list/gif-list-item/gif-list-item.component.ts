import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
  styleUrl: './gif-list-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListItemComponent { }
