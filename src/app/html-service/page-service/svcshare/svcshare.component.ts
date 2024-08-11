import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalShareOneComponent } from '../../modal/modal-share-page/modal-share-one/modal-share-one.component';

@Component({
  selector: 'app-svcshare',
  templateUrl: './svcshare.component.html',
  styleUrls: ['./svcshare.component.scss'],
})
export class SvcshareComponent implements OnInit {

  likeCount = 0;
  isLiked = false;

  private localStorageKey = 'likeCount';

  onLike(): void {
    this.likeCount++;
    this.isLiked = !this.isLiked;
    localStorage.setItem(this.localStorageKey, this.likeCount.toString());
    console.log(`Tombol hati diklik sebanyak ${this.likeCount} kali`);
  }

  isModalOpen = false;

  ngOnInit() {
    const savedLikeCount = localStorage.getItem(this.localStorageKey);
    if (savedLikeCount) {
      this.likeCount = parseInt(savedLikeCount, 10);
    }
  }

  ngAfterViewInit() {
    const nextButton: HTMLElement | null = document.getElementById('next');
    const prevButton: HTMLElement | null = document.getElementById('prev');

    if (nextButton) {
      nextButton.onclick = () => {
        const lists: NodeListOf<Element> = document.querySelectorAll('.item');
        const slide: HTMLElement | null = document.getElementById('slide');
        if (slide) {
          slide.appendChild(lists[0]);
        }
      };
    }

    if (prevButton) {
      prevButton.onclick = () => {
        const lists: NodeListOf<Element> = document.querySelectorAll('.item');
        const slide: HTMLElement | null = document.getElementById('slide');
        if (slide) {
          slide.prepend(lists[lists.length - 1]);
        }
      };
    }
  }

  constructor(private modalController: ModalController) {
  }

  async onOpenModalOne() {
    const modal = await this.modalController.create({
      component: ModalShareOneComponent,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
    });
    await modal.present();
  }  
  
}
