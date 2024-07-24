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
import { Modal1Component } from './../../html-service/modal/modal1/modal1.component';
import { Modal2Component } from './../../html-service/modal/modal2/modal2.component';
import { Modal3Component } from './../../html-service/modal/modal3/modal3.component';
import { Modal4Component } from './../../html-service/modal/modal4/modal4.component';
import { Modal5Component } from './../../html-service/modal/modal5/modal5.component';
import { SvcmodalComponent } from './../../html-service/modal/svcmodal/svcmodal.component';
import { SvcshareComponent } from '../../html-service/page-service/svcshare/svcshare.component';
import { SvctestimonialComponent } from '../../html-service/page-service/svctestimonial/svctestimonial.component';

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
    SvcmodalComponent,
    SvcshareComponent,
    SvctestimonialComponent
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
    SvcmodalComponent,
    SvcshareComponent,
    SvctestimonialComponent
  ],
})
export class HtmlModule { }
