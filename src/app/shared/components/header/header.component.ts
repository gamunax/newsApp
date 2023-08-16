import { Component } from '@angular/core';
import { NewsService } from '@home/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isOpenMenu = false;

  constructor(private _newsService: NewsService) {}

  searchNews(value: string): void {
    this._newsService
      .getSearchNews(value)
      .subscribe(news => this._newsService.news$.next(news));
  }
}
