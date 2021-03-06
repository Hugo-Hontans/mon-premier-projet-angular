import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HighlightDirective } from './highlight.directive';
import { ExcuseMoiJNDirective } from './excuse-moi-jn.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { MerciAlexLaBalanceDirective } from './merci-alex-la-balance.directive';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MenuComponent,
    HighlightDirective,
    ExcuseMoiJNDirective,
    DisplayGuestsDirective,
    MerciAlexLaBalanceDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
