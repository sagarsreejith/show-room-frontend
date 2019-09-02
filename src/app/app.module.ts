import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BrnadListComponent } from './componets/brnad-list/brnad-list.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { ModelInfoComponent } from './common/model-info/model-info.component';
import { ModalModule } from './common/_modal';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BrnadListComponent,
    FooterComponent,
    HeaderComponent,
    ModelInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
