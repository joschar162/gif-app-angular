import { Component, inject } from '@angular/core';
import { GifListComponent } from '../../components/main/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export default class SearchPageComponent {
  gifService = inject(GifsService);

  onSearch(query: string) {
    // TODO
    this.gifService.searchGifs(query);
  }
}
