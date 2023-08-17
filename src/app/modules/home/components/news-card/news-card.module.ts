import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsCardComponent } from './news-card.component';
import { PipesModule } from '@shared/pipes';

@NgModule({
  declarations: [NewsCardComponent],
  imports: [CommonModule, RouterModule, PipesModule],
  exports: [NewsCardComponent],
})
export class NewsCardModule {}
