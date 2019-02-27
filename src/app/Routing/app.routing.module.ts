import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../Core/components/home/home.component';
import { ContactComponent } from '../contact/components/contact/contact.component';
import { ContactDetailComponent } from '../contact/components/contact-detail/contact-detail.component';
import { ContactCreateComponent } from '../contact/components/contact-create/contact-create.component';
import { ContactEditComponent } from '../contact/components/contact-edit/contact-edit.component';
import { NotFoundComponent } from '../Core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'contact-details/:id', component: ContactDetailComponent },
  { path: 'contact-create', component: ContactCreateComponent },
  { path: 'contact-edit/:id', component: ContactEditComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
