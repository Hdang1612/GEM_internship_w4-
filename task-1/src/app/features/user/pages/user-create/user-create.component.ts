import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/userService';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  createForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
  });
  getControl(name: string) {
    return this.createForm.get(name) as FormControl;
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.createForm.invalid) return this.createForm.markAllAsTouched();
    else {
      const formData = this.createForm.value;
      console.log(this.createForm.value);
      this.userService.createUser(formData).subscribe({
        next: (res) => {
          console.log(res);
          alert('success');
          this.router.navigate(['/user']);
        },
        error: (err) => {
          alert(err.error?.error);
        },
      });
    }
  }
}
