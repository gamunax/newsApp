import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environment';
import { News } from '@home/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  API_URL = environment.apiUrl;

  constructor(private _httpClient: HttpClient) {}

  getNews(): Observable<News> {
    const params = {
      country: 'us',
      apiKey: environment.newsApiKey,
    };
    return this._httpClient.get<News>(this.API_URL, { params });
  }
}
