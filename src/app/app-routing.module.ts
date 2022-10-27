import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "register", component: RegisterUsersComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
