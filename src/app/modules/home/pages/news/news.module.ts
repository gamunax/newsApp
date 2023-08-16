import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsCardModule } from '@home/components';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, NewsCardModule],
})
export class NewsModule {}
