  
import { Observable } from "rxjs";
import { UserModel } from "./user-model";

export abstract class UserRepository {
  
  abstract addUser(user: UserModel): Observable<UserModel>;
  abstract getUserById(id: number): Observable<UserModel>;
  abstract getAllUsers(): Observable<UserModel>;  
  abstract updateUser(user: UserModel): Observable<UserModel>;
  abstract deleteUser(userId: number): Observable<void>;
  abstract findUserByName(userName: string): Observable<UserModel>;
  
}