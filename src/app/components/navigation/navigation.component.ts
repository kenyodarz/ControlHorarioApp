// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  appName = 'CDM MANTENIMIENTO Y SERVICIOS';
  private roles: string[];
  isLoggedIn = false;
  showPersonasBoard = false;
  showProyectosBoard = false;
  showRegistrosBoard = false;
  showEntradasBoard = false;
  showInformesBoard = false;
  visibleSidebar = false;
  username: string;

  constructor(
    private tokenStorageService: TokenStorageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showPersonasBoard = this.roles.includes('ROLE_ADMIN');
      this.showProyectosBoard = this.roles.includes('ROLE_ADMIN');
      this.showRegistrosBoard = this.roles.includes('ROLE_ADMIN');
      this.showEntradasBoard = this.roles.includes('ROLE_USER');
      this.showInformesBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
  }
  logout() {
    this.confirmationService.confirm({
      message: '¿Esta Seguro que desea cerrar sesion?',
      header: 'Cerrar Sesion',
      accept: () => {
        this.tokenStorageService.singOut();
        this.irAlInicio();
        window.location.reload();
      },
      reject: () => {
        this.irAlInicio();
      },
    });
  }
  irAlInicio() {
    window.location.replace('#/home');
  }
}
