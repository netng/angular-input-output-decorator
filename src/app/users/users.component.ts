import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] | null = null;
  selectedUser: User | null = null;

  constructor() {
    this.users = [
      new User(1, 'nandang', 'bogor'),
      new User(2, 'ayu', 'hongkong'),
      new User(3, 'kazu', 'jepang'),
    ]
  }

  ngOnInit(): void {
  }

  onSelectUser(user: User) {
    this.selectedUser = user;
  }

}
