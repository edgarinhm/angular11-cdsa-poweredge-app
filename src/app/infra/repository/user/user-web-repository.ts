import { UserWebRepositoryMapper } from './mapper/user-web-repository-mapper';
import { UserRepository } from 'src/app/domain/models/user/user-repository';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserEntity } from "src/app/domain/models/user/user.entity";
import { UserModel } from "src/app/domain/models/user/user.model";
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class UserWebRepository extends UserRepository {

    mapper = new UserWebRepositoryMapper();
  
    constructor(private http: HttpClient ) {
      super();
    }
  
    getUserById(id: number): Observable<UserModel> {
      return this.http
        .get<UserEntity>(this.url+'/users/${id}')
        .pipe(map(this.mapper.mapFrom));
    }
  
    getAllUsers(): Observable<UserModel> {
      return this.http
        .get<UserEntity[]>(this.url+'/users')
        .pipe(switchMap((item) => item))
        .pipe(map(this.mapper.mapFrom));
    }

    addUser(user: UserModel): Observable<UserModel> {
      return this.http.post<UserEntity>(`${this.url}/users`, user)
      .pipe(map(this.mapper.mapFrom));
    }
  }