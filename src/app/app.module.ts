// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from './primeng.module';
import { MaterialModule } from './material.module';

//Componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { InformeComponent } from './components/informe/informe.component';
import { LoginComponent } from './components/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Providers
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';

//Services
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table, TableService } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    InformeComponent,
    LoginComponent,
    PersonaComponent,
    ProfileComponent,
    ProyectoComponent,
    RegistroComponent,
    EntradaComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    authInterceptorProviders,
    TableService,
    Table,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
