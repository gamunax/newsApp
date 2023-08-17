import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NewsService } from '@home/services';
import { of } from 'rxjs';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: NewsService,
          useValue: {
            getNews: () => of({}),
            getSearchNews: () => of({}),
            news$: { next: () => {} },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#searchNews', () => {
    it('should call the service with the correct parameters', () => {
      const newsService = TestBed.inject(NewsService);
      const spy = spyOn(newsService, 'getSearchNews').and.callThrough();

      component.searchNews('test');

      expect(spy).toHaveBeenCalledWith('test');
    });
  });
});
