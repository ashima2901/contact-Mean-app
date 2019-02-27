import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatIconModule, MatSortModule, MatDatepickerModule,
  MatNativeDateModule

} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, BrowserAnimationsModule, MatIconModule,
    MatDatepickerModule, MatSortModule, MatNativeDateModule],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, BrowserAnimationsModule, MatIconModule,
    MatDatepickerModule, MatSortModule, MatNativeDateModule],
})
export class MaterialModule { }
