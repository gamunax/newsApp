import { Component, OnInit } from '@angular/core';
import { News } from '@home/models';
import { NewsService } from '@home/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news$: Observable<News> = this._newsServices.news$;

  constructor(private _newsServices: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this._newsServices
      .getNews()
      .subscribe(news => this._newsServices.news$.next(news));
  }
}
