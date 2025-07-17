import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TextInputComponent } from './shared/components/text-input/text-input.component';
import { UserListComponent } from './features/user/pages/user-list/user-list.component';
import { UserDetailComponent } from './features/user/pages/user-detail/user-detail.component';
import { UserUpdateComponent } from './features/user/pages/user-update/user-update.component';
import { UserCreateComponent } from './features/user/pages/user-create/user-create.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserListItemComponent } from './shared/components/user-list-item/user-list-item.component';
import { AuthInterceptor } from './features/auth/interceptors/auth-interceptor';
import { ErrorInterceptor } from './features/auth/interceptors/error-interceptor';

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
    LoginComponent,
    UserListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
