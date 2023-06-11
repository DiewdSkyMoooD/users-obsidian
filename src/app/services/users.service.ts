import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IResponseUsers, Iuser } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //url base in enviroment
  private base_url: string = environment.base_url;

  //Inject http
  constructor(private http: HttpClient) {}

  //get users form api, using params
  getUsers(params: any): Observable<IResponseUsers> {
    return this.http.get<IResponseUsers>(`${this.base_url}`, {
      params: { ...params },
    });
  }

  //get need a seed a index for array
  getUserById(index: number, params: any):Observable<Iuser> {
    return this.http
      .get<IResponseUsers>(`${this.base_url}`, {
        params: { ...params },
      })
      .pipe(map((res) => res.results[index]));  //map change response
  }
}
