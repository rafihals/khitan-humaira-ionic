import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PophoverComponent } from '../../modal/modal-home-page/pophover/pophover.component';

@Component({
  selector: 'app-svchome',
  templateUrl: './svchome.component.html',
  styleUrls: ['./svchome.component.scss'],
})
export class SvchomeComponent implements OnInit {
  onShow: boolean = false;

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.onShow = true;
    }, 1000);
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
