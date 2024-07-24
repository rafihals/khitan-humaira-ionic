import { Component, OnInit } from '@angular/core';
import { onFadeInBottom, onSlideInFromTop } from '../../../modules/animation/animation';

@Component({
  selector: 'app-svcpage',
  templateUrl: './svcpage.component.html',
  styleUrls: ['./svcpage.component.scss'],
  animations: [onFadeInBottom(), onSlideInFromTop()],

})
export class SvcpageComponent implements OnInit {
  
  onShow: boolean = false;
  isModalOpen1 = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;
  
  setOpen(modalNumber: number, isOpen: boolean) {
    this.isModalOpen1 = false;
    this.isModalOpen2 = false;
    this.isModalOpen3 = false;
    this.isModalOpen4 = false;
    this.isModalOpen5 = false;
  
    switch (modalNumber) {
      case 1:
        this.isModalOpen1 = isOpen;
        break;
      case 2:
        this.isModalOpen2 = isOpen;
        break;
      case 3:
        this.isModalOpen3 = isOpen;
        break;
      case 4:
        this.isModalOpen4 = isOpen;
        break;
      case 5:
        this.isModalOpen5 = isOpen;
        break;
    }
  }
  

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.onShow = true;
    }, 1000);
  }

}
