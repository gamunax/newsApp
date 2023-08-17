import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatelatamPipe } from './datelatam.pipe';

@NgModule({
  declarations: [DatelatamPipe],
  imports: [
    CommonModule
  ],
  exports: [DatelatamPipe]
})
export class PipesModule { }
