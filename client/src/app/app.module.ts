import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxMasonryModule } from 'ngx-masonry';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlicktzCommonModule } from 'src/common';
import { HomeViewComponent } from './views';
import { GalleryModule } from 'src/features/gallery/gallery.module';
import { ImageDataService } from './services/image-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './services/request-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxMasonryModule,
    AppRoutingModule,
    FlicktzCommonModule,
    GalleryModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    },
    ImageDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
