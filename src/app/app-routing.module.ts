import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard] , component:HomeComponent},
  {path:'about', canActivate:[AuthGuard] , component:AboutComponent},
  {path:'gallary', canActivate:[AuthGuard] , component:GallaryComponent},
  {path:'movie', canActivate:[AuthGuard] , component:MovieComponent},
  {path:'tv', canActivate:[AuthGuard] , component:TvComponent},
  {path:'contacts', canActivate:[AuthGuard] , component:ContactsComponent},
  {path:'movieDetails/:id', canActivate:[AuthGuard] , component:MoviedetailsComponent },
  {path:'notfound', canActivate:[AuthGuard] ,component:NotfoundComponent},
  {path:'settings', loadChildren:()=>import('./settings/settings.module').then(x=>x.SettingsModule)},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
