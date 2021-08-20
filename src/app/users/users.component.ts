import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  page = 1
  users : any = [];
  tableLoaded = false
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onGetButtonClick() {
    this.page = 1
    this.userService.getUsers(this.page)
    .subscribe(data => {
      this.users = data
      this.tableLoaded = true
    })
  }

  onHideButtonClick() {
    this.users = []
    this.tableLoaded = false
  }

  @HostListener('scroll', ['$event'])
    onScroll(event: any) {
      if (event.target.scrollingElement.scrollTop > 400) {
      // if (event.target.scrollingElement.offsetHeight + event.target.scrollingElement.scrollTop >= event.target.scrollingElement.scrollHeight) {
        this.page++
        this.userService.getUsers(this.page)
        .subscribe(data => {
        this.users = this.users.concat(data)
        })
      }
    }
  }
