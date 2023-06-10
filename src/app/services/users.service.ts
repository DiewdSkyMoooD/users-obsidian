import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IResponseUsers } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private base_url: string = environment.base_url;

  constructor(private http: HttpClient) { }

  getUsers(params:any):Observable<IResponseUsers>{
    return this.http.get<IResponseUsers>(`${this.base_url}`, {
      params: { ...params }
    })
  }
  
}
