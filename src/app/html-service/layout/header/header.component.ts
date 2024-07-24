import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('popover') popover;

  isOpen = false;
  pageTitle: string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setPageTitle();
    });
  }

  setPageTitle() {
    const currentRoute = this.router.url.split('/')[2];
    switch (currentRoute) {
      case 'home':
        this.pageTitle = 'Home';
        break;
      case 'service':
        this.pageTitle = 'Service';
        break;
      case 'share':
        this.pageTitle = 'Share';
        break;
      case 'testimonial':
        this.pageTitle = 'Testimonial';
        break;
      default:
        this.pageTitle = 'Default Title';
    }
  }

  onPresentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
