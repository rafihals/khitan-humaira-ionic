import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../html-service/footer/footer.component';
import { HeaderComponent } from '../../html-service/header/header.component';
import { LoaderComponent } from '../../html-service/loader/loader.component';
import { RefreshComponent } from '../../html-service/refresh/refresh.component';
import { SplitComponent } from '../../html-service/split/split.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LoaderComponent, RefreshComponent, SplitComponent],
  imports: [CommonModule, IonicModule],
  exports: [FooterComponent, HeaderComponent, LoaderComponent, RefreshComponent, SplitComponent],
})
export class HtmlModule { }
