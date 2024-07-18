import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimonialPageRoutingModule } from './testimonial-routing.module';

import { TestimonialPage } from './testimonial.page';
import { HtmlModule } from '../../../modules/html/html.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimonialPageRoutingModule,
    HtmlModule,
  ],
  declarations: [TestimonialPage,]
})
export class TestimonialPageModule {}
