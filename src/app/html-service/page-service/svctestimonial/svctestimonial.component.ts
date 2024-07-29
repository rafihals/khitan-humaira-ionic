import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
declare function tes(): any;

@Component({
  selector: 'app-svctestimonial',
  templateUrl: './svctestimonial.component.html',
  styleUrls: ['./svctestimonial.component.scss'],
})
export class SvctestimonialComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    tes();
  }



  ngAfterViewInit() {
    // tes();
  }

}
