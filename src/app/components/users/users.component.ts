import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  page = 1;
  users: any = [];
  value = '';
  subs = new Subscription();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers(this.page).subscribe((data) => {
      this.users = data;
    });
  }

  onUserClick(id: number, username: string) {
    this.router.navigate(['/features', `${id}`, username]);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    const elem = event.target.scrollingElement;
    if (elem.scrollTop + elem.clientHeight >= elem.scrollHeight) {
      this.page = this.page > 1 ? 1 : this.page + 1;
      this.subs.add(
        this.userService.getUsers(this.page).subscribe((data) => {
          this.users = this.users.concat(data);
        })
      );
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
