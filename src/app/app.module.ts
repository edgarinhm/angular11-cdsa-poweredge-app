import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiHttpClientService } from './infra/http/api-http-client.service';
import { UserWebRepository } from './infra/repository/user/user-web-repository';
import { UserRepository } from './domain/models/user/user-repository';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiHttpClientService, {provide: UserRepository, useClass: UserWebRepository}
    
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
