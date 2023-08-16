import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterModule, HeaderModule } from '@shared/components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  declarations: [HomeComponent, NewsCardComponent],
  imports: [CommonModule, HomeRoutingModule, HeaderModule, FooterModule],
})
export class HomeModule {}
