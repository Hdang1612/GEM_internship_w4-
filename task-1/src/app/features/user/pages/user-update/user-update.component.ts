import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/userService';
import { User } from 'src/app/core/model/types/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  user!: User;
  isLoading: boolean = true;
  updateForm!: FormGroup;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userId = routeParams.get('userId');
    this.userService.getUserDetail(userId).subscribe({
      next: (res) => {
        console.log('detail', res);
        this.user = res.data;
        this.isLoading = false;
        this.updateForm = new FormGroup({
          first_name: new FormControl(this.user.first_name),
          last_name: new FormControl(this.user.last_name),
          email: new FormControl(this.user.email),
        });
      },
    });
  }
  getControl(name: string) {
    return this.updateForm.get(name) as FormControl;
  }
  Update() {
    if (this.updateForm.invalid) return this.updateForm.markAllAsTouched();
    else {
      const formData = this.updateForm.value;
      console.log('data update >>>', formData);
      this.userService.updateUser(formData, this.user.id).subscribe({
        next: (res) => {
          console.log(res);
          alert('update success');
        },
        error: (err) => {
          alert(err.error?.error);
        },
      });
    }
  }
}
