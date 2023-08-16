import { Component, Input } from '@angular/core';
import { Articles } from '@home/models';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() article!: Articles;
}
