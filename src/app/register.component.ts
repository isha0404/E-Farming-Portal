import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./auth.css']
})
export class RegisterComponent {

  name = "";
  email = "";
  password = "";
  confirmPassword = "";
  role = "CUSTOMER";

  constructor(private router: Router, private http: HttpClient) {}

  register(){

    if(this.name.trim() === ""){
      alert("Name is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(this.email)){
      alert("Please enter a valid email address");
      return;
    }

    const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/;

    if(!passwordPattern.test(this.password)){
      alert("Password must be at least 8 characters and include uppercase, lowercase, number and special character");
      return;
    }

    if(this.password !== this.confirmPassword){
      alert("Passwords do not match");
      return;
    }

    // Create user object
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    };

    // Send data to backend
    this.http.post("http://localhost:8080/api/register", user)
      .subscribe({
        next: (res) => {
          alert("Registration successful");
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          alert("Registration failed");
        }
      });

  }

}