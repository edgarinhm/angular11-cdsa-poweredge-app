import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { UserModel } from 'src/app/core/domain/user/model/user-model';
import { UserDTO } from 'src/app/core/domain/user/model/user-dto';
import { UserRepository } from 'src/app/core/domain/user/model/user-repository';


@Injectable({
    providedIn: 'root'
})
export class UserWebRepository extends UserRepository {    
    
  url = environment.REMOTE_HOST+environment.apiBackEnd;

  constructor(private http: HttpClient ) {
    super();
  }

  getUserById(id: number): Observable<UserModel> {
    return this.http
      .get<UserDTO>(this.url+'/users/${id}');
  }

  getAllUsers(): Observable<UserModel> {
    return this.http
      .get<UserDTO[]>(this.url+'/users')
      .pipe(switchMap((item) => item));
  }

  addUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserDTO>(`${this.url}/users`, user);
  }

  updateUser(user: UserModel): Observable<UserModel> {
    return this.http.put<UserDTO>(`${this.url}/users`, user);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/user/${userId}`);
  }

  findUserByName(userName: string): Observable<UserModel> {
    return this.http.delete<UserDTO>(`${this.url}/user/${userName}`);
  }
}