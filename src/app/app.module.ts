import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {MatButtonModule} from '@angular/material/button';
import {CarouselModule} from 'ngx-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {DeepWorldModule} from 'deep-world-library';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgControlsModule} from 'videogular2/controls';
import {VgCoreModule} from 'videogular2/core';
import { InfoComponent } from './info/info.component';
import { ImpressumComponent } from './impressum/impressum.component';

const appRoutes: Routes = [
  { path: 'team', component: AboutUsComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'info', component: InfoComponent },
  { path: 'home',      component: MainComponent },
  { path: '**', component: MainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutUsComponent,
    InfoComponent,
    ImpressumComponent,
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    DeepWorldModule,
    MatButtonModule,
    CarouselModule,
    BrowserModule.withServerTransition({appId: '4traffic'}),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
