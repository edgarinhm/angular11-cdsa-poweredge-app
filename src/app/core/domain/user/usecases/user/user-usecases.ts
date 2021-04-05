import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../../model/user-model";
import { UserRepository } from "../../model/user-repository";

@Injectable({
    providedIn: 'root'
})
export class UsersUsecases {
    constructor(private userRepository: UserRepository) { }
    
    get(): Observable<UserModel> {
        return this.userRepository.getAllUsers();
    }

    add(params: UserModel): Observable<UserModel> {
        return this.userRepository.addUser(params);
    }

    update(params: UserModel): Observable<UserModel> {
        return this.userRepository.updateUser(params);
    }

    delete(userId: number): Observable<void> {
        return this.userRepository.deleteUser(userId);
    }

    findByName(userName: string): Observable<UserModel> {
        return this.userRepository.findUserByName(userName);
    }
    
    getById(userId: number): Observable<UserModel> {
        return this.userRepository.getUserById(userId);
    }

   
}