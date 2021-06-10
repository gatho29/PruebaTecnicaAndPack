import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userList: user

  constructor(private http: HttpClient) { }

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users');
  }

}
