import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: '<app-user-details>',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user: any | {};
  subs = new Subscription 

  constructor(private userService: UserService, private route: ActivatedRoute) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(+id).subscribe(data => {
      this.user = data;
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
