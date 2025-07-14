import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [AppComponent, InputFieldComponent, SimpleFormComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
