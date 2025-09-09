import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGif = signal<Gif[]>([]);
  trendingGifLoading = signal(true);

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
        this.trendingGif.set(gifs);
        this.trendingGifLoading.set(false);
        //
        console.log({ gifs });
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyURL}/gifs/search`, {
        params: {
          api_key: environment.apiKeyGif,
          q: query,
          limit: '25',
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.toGifList(items))
      );
  }
}
