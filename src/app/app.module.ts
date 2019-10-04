import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { EndPageComponent } from './end-page/end-page.component';
import {GameService} from './game.service'
import { from } from 'rxjs';

const appRoutes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game',      component: GameComponent },
  {
    path: 'end',
    component: EndPageComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    EndPageComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes)],

  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
