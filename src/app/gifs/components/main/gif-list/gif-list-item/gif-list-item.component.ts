import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
  styleUrl: './gif-list-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListItemComponent {
  // Input() imageUrl: string = '';
  imageUrl = input.required<string>();
}
