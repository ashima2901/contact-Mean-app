import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/Contact';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {
  }

  // GET ALL CONTACT
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contact');
  }

  // GET A CONTACT
  getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`api/contact/${id}`);
  }

  // SAVE A CONTACT
  insertContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('api/contact', contact);
  }

  // UPDATE A CONTACT
  updateContact(id: string, contact: Contact): Observable<void> {
    return this.http.put<void>(`api/contact/${id}`, contact);
  }

  // DELETE A CONTACT
  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`api/contact/${id}`);
  }

}
