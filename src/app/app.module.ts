import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreTModule } from './core/core.module';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';
import { HomeModule } from './pages/home/home.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    // Aquí van los componenetes
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    NewsComponent,
    ReviewComponent,
    Directive1Directive,
    Directive2Directive,
  ],
  imports: [
    // Aquí van los módulos
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    CoreTModule,
    //Module1Module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
