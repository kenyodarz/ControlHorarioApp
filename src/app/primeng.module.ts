// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

const myModule = [
  MessagesModule,
  MessageModule,
  PanelModule,
  MenubarModule,
  DialogModule,
  InputTextModule,
  ButtonModule,
  ToastModule,
  TableModule,
  PasswordModule,
  ToggleButtonModule,
  InputMaskModule,
  ConfirmDialogModule,
  PaginatorModule,
  MultiSelectModule,
  SidebarModule,
  DropdownModule,
  CalendarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports: [myModule],
  providers: [],
})
export class PrimengModule {}
