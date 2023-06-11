import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, debounceTime, switchMap } from 'rxjs';
import { IResponseUsers } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent {
  //pagination
  page: number = 1;
  pageSize: number = 5;

  //base get 25 elements of api
  base={results:25}
  
  //form control of input and init the search observer
  typingTimer = new BehaviorSubject<string|null>(null);
  name=new FormControl('');

  //observer content response api
  users$:Observable<IResponseUsers> = this.typingTimer.pipe(
    debounceTime(3000), //time to search the name
    switchMap((name) => {
      //when it start just content name if u typing it add name in query params
      return name?this.getUser({...this.base,name}):this.getUser(this.base); 
    })
  )
  
  constructor(private userService:UsersService){  
  }
 
  //method return the observer of service users
  getUser(busqueda:any):Observable<any>{
    return this.userService.getUsers(busqueda)
  }
  
  
}
