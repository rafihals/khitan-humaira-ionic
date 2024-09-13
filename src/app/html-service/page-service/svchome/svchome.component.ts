import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PophoverComponent } from '../../modal/modal-home-page/pophover/pophover.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-svchome',
  templateUrl: './svchome.component.html',
  styleUrls: ['./svchome.component.scss'],
})
export class SvchomeComponent implements OnInit {
  onShow: boolean = false;
  email: string;
  subscriptionForm: FormGroup;
  emailCom : string


  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private fb: FormBuilder
  ) {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get emailControl() {
    return this.subscriptionForm.get('email');
  }

  onSubscribe(): void {
    if (this.subscriptionForm.valid) {
      this.presentToast();
      setTimeout(() => {
        const email = this.emailControl.value;
        const subject = 'New Subscription';
        const body = `Saya sudah melakukan subscribe dengan email ${email}`;
        const mailtoLink = `mailto:griyakhitanhumaira@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      }, 1500);
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Redirect to mail',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-green-blue',
    });
    toast.present();
  }

  async presentToastInvalid() {
    const toast = await this.toastController.create({
      message: 'Gunakan email lengkap',
      duration: 2000,
      position: 'top',
      cssClass: 'toast-red-orange',
    });
    toast.present();
  }

  ngOnInit() {
    setTimeout(() => {
      this.onShow = true;
    }, 1000);
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async onOpenModalOne() {
    const modal = await this.modalController.create({
      component: PophoverComponent,
      breakpoints: [0, 0.7, 1],
      initialBreakpoint: 0.7,
    });
    await modal.present();
  }

}
