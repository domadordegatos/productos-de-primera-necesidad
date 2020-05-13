import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { ProductsComponent } from './componets/products/products.component';
import { ListOneComponent } from './componets/list-one/list-one.component';
import { RegisterComponent } from './componets/register/register.component';
import { WeComponent } from './componets/we/we.component';
import { ContactComponent } from './componets/contact/contact.component';
import { AppComponent } from './app.component';
import { ListaItemsModule } from './componets/lista-items/lista-items.module';
import { ListaItemsComponent } from './componets/lista-items/lista-items.component';
import { EditComponent } from './componets/edit/edit.component';
import { LoginComponent } from './componets/login/login.component';
import { GuardCiyGuard } from './guard/guard-ciy.guard';

const routes: Routes = [
  { path: 'login-ciy', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'list/:id', component: ListaItemsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'we', component: WeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'edit-loged', component: EditComponent, canActivate: [GuardCiyGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
