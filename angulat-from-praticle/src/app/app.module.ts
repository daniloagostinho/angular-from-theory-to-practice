import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { CardComponent } from './card/card.component';
import { CardHoderDirective } from './card-hoder.directive';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    CardComponent,
    CardHoderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
