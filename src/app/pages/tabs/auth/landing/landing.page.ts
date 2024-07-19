import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { onFadeInAnimation, onFadeInBottom } from '../../../../modules/animation/animation';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  animations: [onFadeInAnimation(), onFadeInBottom()],
})
export class LandingPage implements OnInit {

  showButtonIn = false;
  showText = false;
  showLiquid = false;
  showMainText = false;
  showSuntik = false;
  showFollow = false;
  showButton = false;
  currentYear: number;
  showCopy = false;

  constructor(private router: Router) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showButtonIn = true;
      setTimeout(() => this.showText = true, 700);
      setTimeout(() => this.showMainText = true, 800);
      setTimeout(() => this.showSuntik = true, 850);
      setTimeout(() => this.showButton = true, 900);
      setTimeout(() => this.showFollow = true, 1000);
      setTimeout(() => this.showCopy = true, 1200);
    }, 2500);
    setTimeout(() => this.showLiquid = true, 2350);
  }

  onNavigateHome(): void {
    this.router.navigate(['tabs/home']);
  }
}
