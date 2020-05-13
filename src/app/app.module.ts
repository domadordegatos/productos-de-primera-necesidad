import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { ProductsComponent } from './componets/products/products.component';
import { ListOneComponent } from './componets/list-one/list-one.component';
import { FooterComponent } from './componets/footer/footer.component';
import { RegisterComponent } from './componets/register/register.component';
import { WeComponent } from './componets/we/we.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NavbarSupComponent } from './componets/navbar-sup/navbar-sup.component';
import { ListaItemsComponent } from './componets/lista-items/lista-items.component';
import { EditComponent } from './componets/edit/edit.component';
import { EditModalComponent } from './componets/edit/edit-modal/edit-modal.component';
import { LoginComponent } from './componets/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ListOneComponent,
    FooterComponent,
    RegisterComponent,
    WeComponent,
    ContactComponent,
    NavbarSupComponent,
    ListaItemsComponent,
    EditComponent,
    EditModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
