import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/Contact';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns = ['name', 'title', 'birthDate', 'favorite'];
  public dataSource = new MatTableDataSource<Contact>();
  contacts: any;

  constructor(private contactService: ContactService) {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.contactService.getAllContacts()
      .subscribe(res => {
        this.dataSource.data = res as Contact[];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }


}
