import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsCardComponent } from './news-card.component';

@NgModule({
  declarations: [NewsCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [NewsCardComponent],
})
export class NewsCardModule {}
