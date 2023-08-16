import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, FooterModule],
})
export class ComponentsModule {}
