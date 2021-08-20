import { Component, HostListener } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  page = 1;
  users : any = [];
  tableLoaded = false;

  constructor(private userService: UserService, private router: Router) {}

  onGetButtonClick() {
    this.page = 1;
    this.userService.getUsers(this.page)
    .subscribe(data => {
      this.users = data;
      this.tableLoaded = true;
    })
  }

  onHideButtonClick() {
    this.users = []
    this.tableLoaded = false
  }

  onUserClick(id: number, username: string) {
    this.router.navigate(['/features', `${id}`, username]);
  }

  @HostListener('scroll', ['$event'])
    onScroll(event: any) {
      if (event.target.scrollingElement.scrollTop > 400) { // TODO fix 
      // if (event.target.scrollingElement.offsetHeight + event.target.scrollingElement.scrollTop >= event.target.scrollingElement.scrollHeight) {
        this.page++
        this.userService.getUsers(this.page)
        .subscribe(data => {
        this.users = this.users.concat(data)
        })
      }
    }
  }
