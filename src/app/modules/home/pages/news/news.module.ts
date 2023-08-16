import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsDetailComponent } from '../news-detail/news-detail.component';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [NewsDetailComponent],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}
