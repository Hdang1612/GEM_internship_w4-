import { UserService } from 'src/app/services/userService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/types/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user!: User;
  isLoading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = routeParams.get('userId');
    this.userService.getUserDetail(productId).subscribe({
      next: (res) => {
        console.log('detail', res);
        this.user = res.data;
        this.isLoading = false;
      },
    });
  }
}
