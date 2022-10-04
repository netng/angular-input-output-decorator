import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../users/User';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  
  @Input() users: User[] | null = null;
  @Output() selectUser = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onUserSelect(user: User): void {
    this.selectUser.emit(user);
  }

}
