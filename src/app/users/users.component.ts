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
  displayedUsers : any = [];
  tableLoaded = false;
  value: string = '';
  public searchFilter: any = '';

  constructor(private userService: UserService, private router: Router) {}

  
  onGetButtonClick() {
    this.page = 1;
    this.userService.getUsers(this.page)
    .subscribe(data => {
      this.users = data;
      this.displayedUsers = data;
      this.tableLoaded = true;
    })
  }

  onHideButtonClick() {
    this.displayedUsers = []
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
        this.displayedUsers = this.displayedUsers.concat(data)
        })
      }
    }
  }
