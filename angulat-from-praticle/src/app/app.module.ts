import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { CardComponent } from './card/card.component';
import { CardHoderDirective } from './card-hoder.directive';
import { ChildComponent } from './child/child.component';
import { MascaraDirective } from './mascara.directive';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    CardComponent,
    CardHoderDirective,
    ChildComponent,
    MascaraDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
