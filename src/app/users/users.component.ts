import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any = [];
  tableLoaded = false
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data
      this.tableLoaded = true
    })
  }

}
