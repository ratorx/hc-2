import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { EndComponent } from './end/end.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { PlayService } from './play.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    EndComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'play',
        component: PlayComponent
      },
      {
        path: 'end/:score',
        component: EndComponent
      }
    ])
  ],
  providers: [PlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
