import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { HeroLandingComponent } from './hero-landing/hero-landing.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PhotoComponent } from './photo/photo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { BlogmodalComponent } from './blogmodal/blogmodal.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
// import { NgxTypedJsModule } from 'ngx-typed-js';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from './entry/entry.component';
import { MainComponent } from './main/main.component';
import { SearchPipe } from './search.pipe';
// import { CartComponent } from './cart/cart.component';
import { CartComponent } from './order/cart/cart.component';
import { ProductComponent } from './order/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PhotoGalleryComponent,
    NewsPaperComponent,
    HeroLandingComponent,
    AboutComponent,
    BlogComponent,
    PhotoComponent,
    NavBarComponent,
    LoginComponent,
    BlogmodalComponent,
    AuthFormComponent,
    AdminComponent,
    EntryComponent,
    MainComponent,
    SearchPipe,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
