import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svchome',
  templateUrl: './svchome.component.html',
  styleUrls: ['./svchome.component.scss'],
})
export class SvchomeComponent implements OnInit {
  onShow: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.onShow = true;
    }, 1000);
  }

}
