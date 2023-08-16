import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionMenuModule } from '../accordion-menu/accordion-menu.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AccordionMenuModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
