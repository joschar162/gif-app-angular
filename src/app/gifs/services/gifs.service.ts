import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const GIF_KEY = 'gifs';

const loadGifsFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem('GIF_KEY') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
};

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGif = signal<Gif[]>([]);
  trendingGifLoading = signal(true);
  searchHistory = signal<Record<string, Gif[]>>(loadGifsFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

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
        map((items) => GifMapper.toGifList(items)),

        // Guardar en el historial
        tap((items) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: items,
          }));
        })
      );
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query.toLowerCase()] || [];
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('GIF_KEY', historyString);
  });
}
