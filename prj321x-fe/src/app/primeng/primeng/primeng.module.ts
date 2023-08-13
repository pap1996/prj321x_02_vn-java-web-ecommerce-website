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
import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';

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
    FieldsetModule,
    TabViewModule,
    BadgeModule,
    TableModule,
    DividerModule,
    ChipsModule,
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
    FieldsetModule,
    TabViewModule,
    BadgeModule,
    TableModule,
    DividerModule,
    ChipsModule,
  ],
})
export class PrimengModule {}
