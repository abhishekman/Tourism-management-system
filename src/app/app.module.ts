import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HimalyaComponent } from './himalya/himalya.component';
import { FlouraComponent } from './floura/floura.component';
import { FestComponent } from './fest/fest.component';
import { FoodComponent } from './food/food.component';
import { AdventureComponent } from './adventure/adventure.component';
import { CultureComponent } from './culture/culture.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import{Routes,RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PdestComponent } from './pdest/pdest.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from 'src/material.module';
import{ ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import{ToastrModule} from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { SuccessfullyComponent } from './successfully/successfully.component';
import { MasterComponent } from './master/master.component'

const abc:Routes=[
  {path:"home",component:HomeComponent},
  {path:"adventure",component:AdventureComponent},
  {path:"fest",component:FestComponent},
  {path:"floura",component:FlouraComponent},
  {path:"food",component:FoodComponent},
  {path:"himalya",component:HimalyaComponent},
  {path:"culture",component:CultureComponent},
  {path:"contact",component:ContactComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"updatepopup",component:UpdatepopupComponent},
  {path:"admin",component:AdminComponent},
  {path:'successfully',component:SuccessfullyComponent},
  {path:'master',component:MasterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HimalyaComponent,
    FlouraComponent,
    FestComponent,
    FoodComponent,
    AdventureComponent,
    CultureComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    PdestComponent,
    AdminComponent,
    UpdatepopupComponent,
    SuccessfullyComponent,
    MasterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(abc),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
