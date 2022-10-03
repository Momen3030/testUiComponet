import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeRoutingModule } from './modules/home/homeRoutingModule';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', loadChildren: () => import('./modules/home/homeRoutingModule').then(m => m.HomeRoutingModule) },


{ path: 'users', loadChildren: () => import('./modules/users/UserRoutingModule').then(m => m.UserRoutingModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
