import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrlRegister = `${environment.apiUserUrl}/register`;

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.apiUrlRegister, user);
  }
}
