import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// angular material
import { MatIconModule } from '@angular/material/icon';

//others
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService } from './services/mock-data.service';
import { TimeAgoPipe } from './shared/time-ago.pipe';
import { LoadingService } from './shared/loading.service';

@NgModule({
  declarations: [AppComponent, TimeAgoPipe],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockDataService, { delay: 1000 }),
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
