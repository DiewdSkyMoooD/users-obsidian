import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { InfoUserComponent } from './components/info-user/info-user.component';

const routes: Routes = [
  //basic router 
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    component: TableUsersComponent,
  },
  {
    path: 'users/:seed/:index',
    component: InfoUserComponent,
  },
  {
    path: '**',
    redirectTo: 'users',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
