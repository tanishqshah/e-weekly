import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { AboutComponent } from './about/about.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { EntryComponent } from './entry/entry.component';
import { MainComponent } from './main/main.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { CartComponent } from './order/cart/cart.component';
import { ProductComponent } from './order/product/product.component';

const routes: Routes = [
  {path:'', redirectTo: '/entry', pathMatch: 'full'},
  {path: 'entry', component: EntryComponent},
  {path: 'main', component: MainComponent, children: [
    {path: '', component: BlogComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'photo', component: PhotoGalleryComponent},
    {path: 'about', component: AboutComponent},
    {path: 'product', component: ProductComponent},
    {path: 'cart', component: CartComponent},
    {path: "auth", component: AuthFormComponent}
  ]
  },
  {path: "admin", component: AdminComponent, canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
