import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPageRoutingModule } from './booking-routing.module';
import { BookingPage } from './booking.page';

import { HtmlModule } from '../../../modules/html/html.module';

@NgModule({
  imports: [
    HtmlModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BookingPageRoutingModule
  ],
  declarations: [BookingPage,]
})
export class BookingPageModule {}
