import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './../../html-service/layout/footer/footer.component';
import { HeaderComponent } from './../../html-service/layout/header/header.component';
import { LoaderComponent } from './../../html-service/layout/loader/loader.component';
import { RefreshComponent } from './../../html-service/layout/refresh/refresh.component';
import { NotifComponent } from './../../html-service/layout/notif/notif.component';
import { SvcpageComponent } from './../../html-service/page-service/svcpage/svcpage.component';
import { SvchomeComponent } from './../../html-service/page-service/svchome/svchome.component';
import { Modal1Component } from '../../html-service/modal/modal-service-page/modal1/modal1.component';
import { Modal2Component } from '../../html-service/modal/modal-service-page/modal2/modal2.component';
import { Modal3Component } from '../../html-service/modal/modal-service-page/modal3/modal3.component';
import { Modal4Component } from '../../html-service/modal/modal-service-page/modal4/modal4.component';
import { Modal5Component } from '../../html-service/modal/modal-service-page/modal5/modal5.component';
import { SvcshareComponent } from '../../html-service/page-service/svcshare/svcshare.component';
import { SvctestimonialComponent } from '../../html-service/page-service/svctestimonial/svctestimonial.component';
import { ModalbottomsheetComponent } from '../../html-service/modal/modal-template/modalbottomsheet/modalbottomsheet.component';
import { ModalfullsheetComponent } from '../../html-service/modal/modal-template/modalfullsheet/modalfullsheet.component';
import { ModalShareOneComponent } from '../../html-service/modal/modal-share-page/modal-share-one/modal-share-one.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    RefreshComponent,
    NotifComponent,
    SvcpageComponent,
    SvchomeComponent,
    Modal1Component,
    Modal2Component,
    Modal3Component,
    Modal4Component,
    Modal5Component,
    SvcshareComponent,
    SvctestimonialComponent,
    ModalbottomsheetComponent,
    ModalfullsheetComponent,
    ModalShareOneComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FooterComponent,
    HeaderComponent,
    LoaderComponent,
    RefreshComponent,
    NotifComponent,
    SvcpageComponent,
    SvchomeComponent,
    Modal1Component,
    Modal2Component,
    Modal3Component,
    Modal4Component,
    Modal5Component,
    SvcshareComponent,
    SvctestimonialComponent,
    ModalbottomsheetComponent,
    ModalfullsheetComponent,
    ModalShareOneComponent
  ],
})
export class HtmlModule { }
