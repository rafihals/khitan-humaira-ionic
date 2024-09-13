import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { onFadeInAnimation, onFadeInBottom } from '../../../../modules/animation/animation.module';
import { ToastController } from '@ionic/angular';

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

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {
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
    this.router.navigate(['page/home']);
  }

  //fb

  onClickFb(): void {
    this.presentToastFb();
    setTimeout(() => {
      window.open('https://www.facebook.com/', '_blank');
    }, 1500);
  }

  async presentToastFb() {
    const toast = await this.toastController.create({
      message: 'Redirect to facebook',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-facebook',
    });
    toast.present();
  }

  //ig

  onClickIg(): void {
    this.presentToastIg();
    setTimeout(() => {
      window.open('https://www.instagram.com/', '_blank');
    }, 1500);
  }

  async presentToastIg() {
    const toast = await this.toastController.create({
      message: 'Redirect to instagram',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-instagram',
    });
    toast.present();
  }

  //twitter

  onClickTwitter(): void {
    this.presentToastTwitter();
    setTimeout(() => {
      window.open('https://twitter.com/', '_blank');
    }, 1500);
  }

  async presentToastTwitter() {
    const toast = await this.toastController.create({
      message: 'Redirect to twitter',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-twitter',
    });
    toast.present();
  }

  // email

  onClickEmail(): void {
    this.presentToastEmail();
    setTimeout(() => {
      window.open('https://mail.google.com/', '_blank');
    }, 1500);
  }

  async presentToastEmail() {
    const toast = await this.toastController.create({
      message: 'Redirect to mail',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-mail',
    });
    toast.present();
  }

  // wa 
  onClickWa() {
    this.presentToastWa();
    setTimeout(() => {
      window.open('https://wa.me/6281326493285', '_blank');
    }, 1500);
  }

  async presentToastWa() {
    const toast = await this.toastController.create({
      message: 'Redirect to wa',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-wa',
    });
    toast.present();
  }

}
