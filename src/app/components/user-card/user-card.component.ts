import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {

  public user;
  public users;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  someMethod(){
    this.userService.getOne(1).subscribe( user => this.user = user);
  }

  someSecondMethod(){
    this.userService.getAll().subscribe( users => this.users = users);
  }

}
