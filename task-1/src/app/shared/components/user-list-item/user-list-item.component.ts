import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';
import { error } from 'console';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  constructor(private userService: UserService) {}
  isShowConfirm = false;
  @Input() user!: User;

  ngOnInit(): void {}
  deleteUser() {
    console.log('ádfasdfa');
    this.isShowConfirm = true;
  }

  handleConfirm(confirmed: boolean) {
    this.isShowConfirm = false;
    if (confirmed && this.user)
      this.userService.deleteUser(this.user.id).subscribe({
        next: () => {
          console.log('deleted');
        },
        error: (err) => {
          alert(err.error?.error);
        },
      });
  }
}
