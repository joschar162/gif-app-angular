import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGif = signal<Gif[]>([]);
  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyURL}/gifs/trending`, {
        params: {
          api_key: environment.apiKeyGif,
          limit: '25',
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.toGifList(resp.data);
        console.log({ gifs });
      });
  }
}
