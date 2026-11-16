import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(){
    this.isLoggedIn = localStorage.getItem("user") != null;
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

}