import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    if (form.valid) {
      this.auth.login(this.user).subscribe({
        next: (token) => {
          console.log('receive', token);
          localStorage.setItem('authToken', token.token);
          this.router.navigate(['/user']);
        },
        error: (err) => {
          alert(err.error?.error);
        },
      });
    }
  }
}
