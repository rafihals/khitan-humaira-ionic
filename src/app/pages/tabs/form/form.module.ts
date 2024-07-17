import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormPageRoutingModule } from './form-routing.module';
import { FormPage } from './form.page';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';import { MatStepperModule } from '@angular/material/stepper';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    NgxChartsModule

  ],
  declarations: [FormPage]
})
export class FormPageModule {}
