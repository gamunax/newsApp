import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '@environment';
import { News } from '../models/news.model';
import { NewsService } from './news.service';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService],
    });
    service = TestBed.inject(NewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getNews', () => {
    it('should make a GET request to the News API with the correct parameters', () => {
      const mockResponse: News = {
        status: 'ok',
        totalResults: 1,
        articles: [],
      };

      service.getNews().subscribe(news => {
        expect(news).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(
        `${service.API_URL}?country=us&apiKey=${environment.newsApiKey}`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.params.get('country')).toBe('us');
      expect(req.request.params.get('apiKey')).toBe(environment.newsApiKey);

      req.flush(mockResponse);
    });
  });

  describe('#getSearchNews', () => {
    it('should make a GET request to the News API with the correct parameters', () => {
      const mockResponse: News = {
        status: 'ok',
        totalResults: 1,
        articles: [],
      };

      service.getSearchNews('test').subscribe(news => {
        expect(news).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(
        `${service.API_URL}?q=test&apiKey=${environment.newsApiKey}`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.params.get('q')).toBe('test');
      expect(req.request.params.get('apiKey')).toBe(environment.newsApiKey);

      req.flush(mockResponse);
    });
  });
});
