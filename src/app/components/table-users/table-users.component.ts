import { Component, OnInit } from '@angular/core';
import { IResponseUsers } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {
  users!:IResponseUsers;
  page: number = 1;
  pageSize: number = 5;
  constructor(private userService:UsersService){
    
  }
  ngOnInit(): void {
    this.userService.getUsers({results:25}).subscribe(res=>
      {this.users=res
    
      }
      )
  }
  

}
