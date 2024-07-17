import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  animations: [
    trigger('fadeInFromBottom', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(50px)'
      })),
      transition(':enter', [
        animate('1000ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('fadeInText', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(50px)'
      })),
      transition(':enter', [
        animate('1000ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('fadeInLiquid', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(0px)'
      })),
      transition(':enter', [
        animate('1000ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]),
  ]
})
export class LandingPage implements OnInit {

  showButtonIn: Boolean = false;
  showText: boolean = false;
  showLiquid: boolean = false;
  showMainText: boolean = false;
  showSuntik: boolean = false;
  showFollow: boolean = false;
  showButton: boolean = false;
  currentYear: number;
  showCopy: boolean = false;

  constructor(
    private router: Router
  ) { this.currentYear = new Date().getFullYear(); }

  ngOnInit(): void {
    setTimeout(() => {
      this.showButtonIn = true;
      setTimeout(() => {
        this.showText = true;
      }, 700);
      setTimeout(() => {
        this.showMainText = true;
      }, 800);
      setTimeout(() => {
        this.showSuntik = true;
      }, 850);
      setTimeout(() => {
        this.showButton = true;
      }, 900);
      setTimeout(() => {
        this.showFollow = true;
      }, 1000);
      setTimeout(() => {
        this.showCopy = true;
      }, 1200);
    }, 2000);
    setTimeout(() => {
      this.showLiquid = true;
    }, 2500)
  }


  onNavigateHome(): void {
    this.router.navigate(['tabs/home']);
  }


}
