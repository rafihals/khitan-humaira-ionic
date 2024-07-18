import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../html-service/footer/footer.component';
import { HeaderComponent } from '../../html-service/header/header.component';
import { LoaderComponent } from '../../html-service/loader/loader.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent, LoaderComponent],
})
export class HtmlModule { }
