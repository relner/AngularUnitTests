import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { UserCardComponent } from './components/user-card/user-card.component';
import { LogClickDirective } from './directives/log-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    UserCardComponent,
    LogClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
