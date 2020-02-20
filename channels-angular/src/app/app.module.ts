import { AuthInterceptorService } from './services/auth-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { TableOfChannelsComponent } from './table-of-channels/table-of-channels.component';

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      CreateChannelComponent,
      TableOfChannelsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatTableModule,
      HttpClientModule
   ],
   providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
   }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
