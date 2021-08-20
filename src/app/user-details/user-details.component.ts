import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: '<app-user-details>',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  user: any | {};
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(+id).subscribe(data => {
      this.user = data;
    })
  }
}
