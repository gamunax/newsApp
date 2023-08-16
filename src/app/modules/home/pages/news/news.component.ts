import { Component } from '@angular/core';
import { News } from '@home/models';
import { NewsService } from '@home/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  news$: Observable<News> = this._newsServices.getNews();

  constructor(private _newsServices: NewsService) {}
}
