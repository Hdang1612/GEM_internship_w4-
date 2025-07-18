import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { UserListComponent } from './features/user/pages/user-list/user-list.component';
import { UserDetailComponent } from './features/user/pages/user-detail/user-detail.component';
import { UserUpdateComponent } from './features/user/pages/user-update/user-update.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { UserCreateComponent } from './features/user/pages/user-create/user-create.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'user',
    component: MainLayoutComponent,canActivate:[AuthGuard],
    children: [
      { path: '', component: UserListComponent },
      { path: 'detail/:userId', component: UserDetailComponent },
      { path: 'update/:userId', component: UserUpdateComponent },
      { path: 'create', component: UserCreateComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
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
