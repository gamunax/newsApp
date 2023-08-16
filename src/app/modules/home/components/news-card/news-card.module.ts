import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsCardComponent } from './news-card.component';

@NgModule({
  declarations: [NewsCardComponent],
  imports: [CommonModule],
  exports: [NewsCardComponent],
})
export class NewsCardModule {}
