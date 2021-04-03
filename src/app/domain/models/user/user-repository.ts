import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UserModel } from "./user.model";

export abstract class UserRepository {
  url = environment.REMOTE_HOST+environment.apiBackEnd;
  abstract addUser(user: UserModel): Observable<UserModel>;
  abstract getUserById(id: number): Observable<UserModel>;
  abstract getAllUsers(): Observable<UserModel>;
}