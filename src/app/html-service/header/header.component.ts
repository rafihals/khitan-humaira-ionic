import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
      case 'booking':
        this.pageTitle = 'Booking';
        break;
      case 'testimonial':
        this.pageTitle = 'Testimonial';
        break;
      case 'form':
        this.pageTitle = 'Form';
        break;
      case 'settings':
        this.pageTitle = 'Settings';
        break;
      default:
        this.pageTitle = 'Default Title';
    }
  }
}
