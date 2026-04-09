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
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { DrawerModule } from 'primeng/drawer';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

const myModule = [
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
  DrawerModule,
  SelectModule,
  DatePickerModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports: [myModule],
  providers: [],
})
export class PrimengModule {}
