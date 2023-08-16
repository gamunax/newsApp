import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.scss'],
})
export class AccordionMenuComponent {
  @Input() isOpenMenu = false;
  @Output() closeMenu = new EventEmitter<boolean>();
}
