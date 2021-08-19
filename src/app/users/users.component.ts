import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any = [];
 
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log('omg')
    this.users = USERS
  }
}
