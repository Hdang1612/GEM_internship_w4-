import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TextInputComponent } from './shared/components/text-input/text-input.component';
import { UserListComponent } from './feature/user/pages/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/pages/user-detail/user-detail.component';
import { UserUpdateComponent } from './feature/user/pages/user-update/user-update.component';
import { UserCreateComponent } from './feature/user/pages/user-create/user-create.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextInputComponent,
    UserListComponent,
    UserDetailComponent,
    UserUpdateComponent,
    UserCreateComponent,
    MainLayoutComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
