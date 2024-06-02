import { Component, OnInit } from '@angular/core';
import { loginData } from 'dummyData';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  exampleInputEmail1: any;
  exampleInputPassword1: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }


  login() {
    console.log(this.exampleInputEmail1 )
    this.router.navigate(['/dashboard']); // Adjust the URL as necessary

    // Perform authentication logic here
    if (this.exampleInputEmail1 ===loginData.email && this.exampleInputPassword1 === loginData.password) {
      // Authentication successful, redirect to dashboard or perform other actions
      console.log('Authentication successful');
      // Redirect to dashboard or perform other actions upon successful authentication
    } else {
      // Authentication failed, display error message or perform other actions
      console.log('Invalid email or password');
      // Display error message or perform other actions upon failed authentication
    }
  }
}
