import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    MenubarModule,
    ListboxModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,
    DataViewModule,
    RatingModule,
    TagModule,
  ],
  exports: [
    CommonModule,
    CardModule,
    MenubarModule,
    ListboxModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,
    DataViewModule,
    RatingModule,
    TagModule,
  ],
})
export class PrimengModule {}
