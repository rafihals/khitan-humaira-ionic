import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifPageRoutingModule } from './notif-routing.module';

import { NotifPage } from './notif.page';
import { HtmlModule } from '../../../modules/html/html.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlModule,
    NotifPageRoutingModule
  ],
  declarations: [NotifPage]
})
export class NotifPageModule {}
