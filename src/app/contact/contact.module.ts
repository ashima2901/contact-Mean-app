import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactService } from './services/contact.service';
import { FilterdataPipe } from '../filter.pipe';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule],
  declarations: [
    ContactComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    ContactEditComponent,
    FilterdataPipe
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule {
}
