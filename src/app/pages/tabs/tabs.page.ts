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
  @ViewChild('menuBar') menuBar!: ElementRef;
  @ViewChild('menuIndicator') menuIndicator!: ElementRef;
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
    // No need to initialize here since it's handled in ngAfterViewInit
    this.isLandingPage = false;
  }

  ngAfterViewInit() {
    this.setInitialMenuIndicatorPosition();
  }

  setInitialMenuIndicatorPosition() {
    const currentUrl = this.router.url;
    const menuItems = this.menuBar.nativeElement.querySelectorAll('.sc-menu-item');
    const menuItemsArray = Array.from(menuItems) as HTMLElement[];
    const targetItem = menuItemsArray.find((item: HTMLElement) => {
      return item.getAttribute('href') === currentUrl;
    });

    if (targetItem) {
      targetItem.classList.add('sc-current');
      this.updateIndicatorPosition(targetItem);
    }
  }

  selectMenu(event: Event, index: number) {
    let targetUrl: string;

    switch(index) {
      case 0: targetUrl = '/page/home'; break;
      case 1: targetUrl = '/page/subscribe'; break;
      case 2: targetUrl = '/page/share'; break;
      case 3: targetUrl = '/page/testimonial'; break;
      default: return;
    }

    this.router.navigate([targetUrl]);
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
    if (url.includes('/home')) return 0;
    if (url.includes('/subscribe')) return 1;
    if (url.includes('/share')) return 2;
    if (url.includes('/testimonial')) return 3;
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
  }
}
