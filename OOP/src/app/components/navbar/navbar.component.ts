import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'oop-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  @Input() pageTitle: string;
}
