import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';
import { User } from 'src/app/shared/types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService, private route: Router) {}
  isLoading: boolean = true;
  users!: User[];
  currentPage: number = 1;
  totalPages: number[] = [];
  ngOnInit(): void {
    this.loadList(1);
  }

  loadList(currentPage: number) {
    this.userService.getListUser(currentPage).subscribe({
      next: (res) => {
        console.log('receive', res.data);
        this.users = res.data;
        this.isLoading = false;
        this.totalPages = Array.from(
          { length: res.total_pages },
          (_, i) => i + 1
        );
      },
      error: (err) => {
        alert(err.error?.error);
      },
    });
  }
  paginate(page: number) {
    this.loadList(page);
    this.currentPage = page;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
      this.loadList(this.currentPage);
    }
  }
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadList(this.currentPage);
    }
  }
}
