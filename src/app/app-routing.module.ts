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
import { AdminloginComponent } from './adminpanel/adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './adminpanel/adminnavbar/adminnavbar.component';
import { AddproductComponent } from './adminpanel/addproduct/addproduct.component';
import { UserdetailComponent } from './adminpanel/userdetail/userdetail.component';
import { AdminmainComponent } from './adminpanel/adminmain/adminmain.component';
import { UpdateproductComponent } from './adminpanel/updateproduct/updateproduct.component';
import { ReviewComponent } from './adminpanel/review/review.component';
import { ChangeproductdetailComponent } from './adminpanel/changeproductdetail/changeproductdetail.component';

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
  {
    path: 'admin', component: AdminmainComponent, children: [
      { path: 'adminlogin', component: AdminloginComponent },
          {path:'',component:UserdetailComponent},
          {path:'userdet',component:UserdetailComponent},
          { path: 'adminnav', component: AdminnavbarComponent },
          { path: 'addproduct', component: AddproductComponent },
          { path: 'update', component: UpdateproductComponent },
          { path: 'review', component: ReviewComponent },
          {path:'change/:id',component:ChangeproductdetailComponent}
        ]
  },
      
// {path: "admin", component: AdminComponent, canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
