import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterModule, HeaderModule } from '@shared/components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HeaderModule, FooterModule],
})
export class HomeModule {}
