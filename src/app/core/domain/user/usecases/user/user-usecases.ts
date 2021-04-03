import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../../model/user-model";
import { UserRepository } from "../../model/user-repository";

@Injectable({
    providedIn: 'root'
})
export class UsersUsecases {
    constructor(private userRepository: UserRepository) { }
    
    getUsers(): Observable<UserModel> {
        return this.userRepository.getAllUsers();
    }

    addUser(params: UserModel): Observable<UserModel> {
        return this.userRepository.addUser(params);
    }

    updateUser(params: UserModel): Observable<UserModel> {
        return this.userRepository.updateUser(params);
    }

    deleteUser(userId: number): Observable<void> {
        return this.userRepository.deleteUser(userId);
    }

    findUserByName(userName: string): Observable<UserModel> {
        return this.userRepository.findUserByName(userName);
    }
    
    getUserById(userId: number): Observable<UserModel> {
        return this.userRepository.getUserById(userId);
    }

   
}