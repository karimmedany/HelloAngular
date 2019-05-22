import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./views/home/home.component";
import { SigninComponent } from "./views/auth/signin/signin.component";
import { SignupComponent } from "./views/auth/signup/signup.component";
import { AllItemsComponent } from "./views/items/all-items/all-items.component";


 const appRouters:Routes = [
{path:'',component:HomeComponent}
,
{path:'signup',component:SignupComponent}
,
{path:'signin',component:SigninComponent}
,
{path:'items',component:AllItemsComponent}
];



 @NgModule({
imports:[RouterModule.forRoot(appRouters)],
exports:[RouterModule]
 })

export class AppRouterModule{}