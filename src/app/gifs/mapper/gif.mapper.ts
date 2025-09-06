import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interfaces';

export class GifMapper {
  static toGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static toGifList(items: GiphyItem[]): Gif[] {
    return items.map(this.toGif);
  }
}
