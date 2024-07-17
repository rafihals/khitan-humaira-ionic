import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, AfterViewInit {

  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  isLandingPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: NavigationEnd) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const navEndEvent = event as NavigationEnd;
      this.checkUrl(navEndEvent.urlAfterRedirects);
    });
  }

  ngOnInit(): void {
    this.isLandingPage = false;
  }

  @ViewChild('menuBar') menuBar!: ElementRef;
  @ViewChild('menuIndicator') menuIndicator!: ElementRef;

  ngAfterViewInit() {
    this.setInitialMenuIndicatorPosition();
  }

  setInitialMenuIndicatorPosition() {
    const menuItems = this.menuBar.nativeElement.querySelectorAll('.sc-menu-item');
    const currentUrl = this.router.url;
    const menuItemsArray = Array.from(menuItems) as HTMLElement[];
    const initialMenuItem = menuItemsArray.find((item: HTMLElement) => item.getAttribute('href') === currentUrl);

    if (initialMenuItem) {
      initialMenuItem.classList.add('sc-current');
      this.updateIndicatorPosition(initialMenuItem);
    }
  }

  selectMenu(event: Event, index: number) {
    if (index === 0){
      this.router.navigate(['/tabs/booking']);
    } else if (index === 1){
      this.router.navigate(['/tabs/form']);
    }else if (index === 2){
      this.router.navigate(['/tabs/home']);
    }else if (index === 3){
      this.router.navigate(['/tabs/testimonial']);
    }else if (index === 4){
      this.router.navigate(['/tabs/settings']);
    }
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    this.updateIndicatorPosition(target);

    this.menuBar.nativeElement.querySelectorAll('.sc-menu-item').forEach((item: HTMLElement) => {
      item.classList.remove('sc-current');
    });
    target.classList.add('sc-current');
  }

  updateIndicatorPosition(element: HTMLElement) {
    const menuPosition = element.offsetLeft - 16;
    this.menuIndicator.nativeElement.style.left = `${menuPosition}px`;
    this.menuBar.nativeElement.style.backgroundPosition = `${menuPosition - 8}px`;
  }

  checkUrl(url: string) {
    this.isLandingPage = url.includes('/landing');
    if (!this.isLandingPage) {
      const index = this.getMenuIndexFromUrl(url);
      const menuItems = this.menuBar.nativeElement.querySelectorAll('.sc-menu-item');
      this.selectMenuByIndex(menuItems, index);
    }
  }

  getMenuIndexFromUrl(url: string): number {
    if (url.includes('/booking')) return 0;
    if (url.includes('/form')) return 1;
    if (url.includes('/home')) return 2;
    if (url.includes('/testimonial')) return 3;
    if (url.includes('/settings')) return 4;
    return -1;
  }

  selectMenuByIndex(menuItems: NodeListOf<HTMLElement>, index: number) {
    if (index >= 0 && index < menuItems.length) {
      const target = menuItems[index];
      this.updateIndicatorPosition(target);

      menuItems.forEach((item: HTMLElement) => {
        item.classList.remove('sc-current');
      });
      target.classList.add('sc-current');
    }
  }}
