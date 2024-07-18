import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormPageRoutingModule } from './form-routing.module';
import { FormPage } from './form.page';
import { HtmlModule } from '../../../modules/html/html.module';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
    ReactiveFormsModule,
    HtmlModule,
  ],
  declarations: [FormPage,],
})
export class FormPageModule {}
