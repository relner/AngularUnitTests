import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getOne(userId: number): Observable<User>{
    return this.http.get<User>(`/users/${userId}`);
  }

  getAll(){}

}
