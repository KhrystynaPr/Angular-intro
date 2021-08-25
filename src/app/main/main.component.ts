import { Component, HostListener } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  page = 1;
  users : any = [];
  displayedUsers : any = [];
  tableLoaded = false;
  value: string = '';
  public searchFilter: any = '';

  constructor(private userService: UserService, private router: Router) {}


  onGetButtonClick() {
    this.router.navigate(['/users']);
    this.tableLoaded = true
  }

  onUserClick(id: number, username: string) {
    this.router.navigate(['/features', `${id}`, username]);
  }

  }



