import { Component, OnInit } from '@angular/core';
import { onFadeInBottom, onSlideInFromLeft, onSlideInFromRight, onSlideInFromTop } from '../../../modules/animation/animation.module';
import { ModalController } from '@ionic/angular';
import { Modal1Component } from '../../modal/modal-service-page/modal1/modal1.component';
import { Modal2Component } from '../../modal/modal-service-page/modal2/modal2.component';
import { Modal3Component } from '../../modal/modal-service-page/modal3/modal3.component';
import { Modal4Component } from '../../modal/modal-service-page/modal4/modal4.component';
import { Modal5Component } from '../../modal/modal-service-page/modal5/modal5.component';

@Component({
  selector: 'app-svcpage',
  templateUrl: './svcpage.component.html',
  styleUrls: ['./svcpage.component.scss'],
  animations: [onFadeInBottom(), onSlideInFromTop(), onSlideInFromLeft()],

})
export class SvcpageComponent implements OnInit {

  onShow: boolean = false;
  onShowSub: boolean = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    setTimeout(() => {
      this.onShow = true;
      this.onShowSub = true;
    }, 1002);
  }

  async onOpenModal1() {
    const modal = await this.modalController.create({
      component: Modal1Component,
    });
    await modal.present();
  }

  async onOpenModal2() {
    const modal = await this.modalController.create({
      component: Modal2Component,
    });
    await modal.present();
  }
  async onOpenModal3() {
    const modal = await this.modalController.create({
      component: Modal3Component,
    });
    await modal.present();
  }
  async onOpenModal4() {
    const modal = await this.modalController.create({
      component: Modal4Component,
    });
    await modal.present();
  }
  async onOpenModal5() {
    const modal = await this.modalController.create({
      component: Modal5Component,
    });
    await modal.present();
  }
}
