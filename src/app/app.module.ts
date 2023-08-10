import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PessoasModule } from './pessoas/pessoas.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CoreModule,
    PessoasModule

  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }