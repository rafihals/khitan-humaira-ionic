import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalShareOneComponent } from '../../modal/modal-share-page/modal-share-one/modal-share-one.component';

@Component({
  selector: 'app-svcshare',
  templateUrl: './svcshare.component.html',
  styleUrls: ['./svcshare.component.scss'],
})
export class SvcshareComponent implements OnInit {

  isModalOpen = false;

  ngOnInit() {
  }

  constructor(private modalController: ModalController) {}

  async onOpenModalOne() {
    const modal = await this.modalController.create({
      component: ModalShareOneComponent,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
    });
    await modal.present();
  }
}
