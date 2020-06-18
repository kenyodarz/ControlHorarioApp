// Angular
import { Component, OnInit } from '@angular/core';

// Servicios
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      (data) => {
        this.content = data;
      },
      (error) => {
        this.content = JSON.parse(error.error).message;
      }
    );
  }
}
