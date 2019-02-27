import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './Routing/app.routing.module';
import { CoreModule } from './Core/core.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './Shared/shared.module';
import { AppComponent } from './app.component';
import { MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ContactModule,
    SharedModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
