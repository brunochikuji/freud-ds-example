import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FreudButtonModule, FreudCardModule, FreudGalleryComponent, FreudGalleryModule, FreudImageModule, FreudInputTextModule, FreudMenubarModule } from '@freud-ds/web-components';

import { AppComponent } from './app.component';
import { FormComponent } from './componnets/form/form.component';
import { DetailsComponent } from './componnets/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailsComponent,
  ],
  imports: [
    FreudMenubarModule,
    FreudGalleryModule,
    FreudImageModule,
    FreudButtonModule,
    FreudCardModule,
    FreudInputTextModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
