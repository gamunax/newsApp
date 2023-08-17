import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environment';
import { News } from '@home/models';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import * as newsMock from '../mock/news-mock.json';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  API_URL = environment.apiUrl;
  news$ = new BehaviorSubject<News>({} as News);

  constructor(private _httpClient: HttpClient) {}

  getNews(): Observable<News> {
    const params = {
      country: 'us',
      apiKey: environment.newsApiKey,
    };
    return this._httpClient.get<News>(this.API_URL, { params }).pipe(
      catchError(error => {
        return of(newsMock as News);
      })
    );
  }

  getSearchNews(search: string): Observable<News> {
    const params = {
      q: search,
      apiKey: environment.newsApiKey,
    };

    if (!search) return this.getNews();

    return this._httpClient.get<News>(this.API_URL, { params }).pipe(
      catchError(error => {
        return of({ status: 'error', totalResults: 0, articles: [] });
      })
    );
  }
}
