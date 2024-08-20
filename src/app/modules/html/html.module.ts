import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
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
import { TitleComponent } from '../../html-service/section/titlepage/titleone/title.component';
import { OurteamComponent } from '../../html-service/section/ourteam/ourteam.component';
import { ArticlehomeComponent } from '../../html-service/section/articlehome/articlehome.component';
import { OurserviceComponent } from '../../html-service/section/ourservice/ourservice.component';
import { PophoverComponent } from '../../html-service/modal/modal-home-page/pophover/pophover.component';
import { ParallaxComponent } from '../../html-service/section/parallaxs/parallax/parallax.component';
import { ParallaxsecondComponent } from '../../html-service/section/parallaxs/parallaxsecond/parallaxsecond.component';
import { SosmedComponent } from '../../html-service/section/sosmeds/sosmed/sosmed.component';
import { SosmedtwoComponent } from '../../html-service/section/sosmeds/sosmedtwo/sosmedtwo.component';
import { SosmedthreeComponent } from '../../html-service/section/sosmeds/sosmedthree/sosmedthree.component';
import { MapsComponent } from '../../html-service/section/maps/maps.component';
import { TitlethreeComponent } from '../../html-service/section/titlepage/titlethree/titlethree.component';
import { TitletwoComponent } from '../../html-service/section/titlepage/titletwo/titletwo.component';
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
    ModalShareOneComponent,
    TitleComponent,
    OurteamComponent,
    ArticlehomeComponent,
    OurserviceComponent,
    PophoverComponent,
    ParallaxComponent,
    ParallaxsecondComponent,
    SosmedComponent,
    SosmedtwoComponent,
    SosmedthreeComponent,
    TitletwoComponent,
    MapsComponent,
    TitlethreeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
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
    ModalShareOneComponent,
    TitleComponent,
    OurteamComponent,
    ArticlehomeComponent,
    OurserviceComponent,
    PophoverComponent,
    ParallaxComponent,
    ParallaxsecondComponent,
    SosmedComponent,
    SosmedtwoComponent,
    SosmedthreeComponent,
    TitletwoComponent,
    MapsComponent,
    TitlethreeComponent
  ],
})
export class HtmlModule { }
