import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, OnDestroy{ 

  page = 1;
  users : any = [];
  displayedUsers : any = [];
  tableLoaded = false;
  value: string = '';
  isAllUsersLoaded = false
  subs = new Subscription

  ngOnInit() {
    this.userService.getUsers(this.page)
    .subscribe(data => {
      this.users = data;
      this.displayedUsers = data;
      this.tableLoaded = true;
    })
  }

  constructor(private userService: UserService, private router: Router) {}

  onUserClick(id: number, username: string) {
    this.router.navigate(['/features', `${id}`, username]);
  }

  @HostListener('scroll', ['$event'])
    onScroll(event: any) {
      if (this.isAllUsersLoaded) {
        return
      }
      const elem = event.target.scrollingElement
      if (elem.scrollTop + elem.clientHeight >= elem.scrollHeight) {
        this.page++
        this.subs.add(this.userService.getUsers(this.page)
        .subscribe(data => {
          if (Object.keys(data).length === 0) {
            this.isAllUsersLoaded = true
            return
          }
        this.users = this.users.concat(data)
        this.displayedUsers = this.displayedUsers.concat(data)
        }))
      }
    }

    ngOnDestroy() {
      this.subs.unsubscribe();
    }

  }
