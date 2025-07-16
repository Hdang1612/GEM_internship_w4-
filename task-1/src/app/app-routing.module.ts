import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { UserListComponent } from './feature/user/pages/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/pages/user-detail/user-detail.component';
import { UserUpdateComponent } from './feature/user/pages/user-update/user-update.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { UserCreateComponent } from './feature/user/pages/user-create/user-create.component';

const routes: Routes = [
  {
    path: 'user',
    component: MainLayoutComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'detail/:userId', component: UserDetailComponent },
      { path: 'update/:userId', component: UserUpdateComponent },
      { path: 'create', component: UserCreateComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
