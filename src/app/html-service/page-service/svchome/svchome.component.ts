import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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


  constructor(
    private modalController: ModalController,
    private fb: FormBuilder
  ) {
  }

  get emailControl() {
    return this.subscriptionForm.get('email');
  }

  onSubscribe(): void {
    if (this.subscriptionForm.valid) {
      const email = this.emailControl.value;
      const subject = 'New Subscription';
      const body = `Saya sudah melakukan subscribe dengan email ${email}`;
      const mailtoLink = `mailto:harimansaputra70@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
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
