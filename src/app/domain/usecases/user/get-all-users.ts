import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../models/base/use-case';
import { UserRepository } from '../../models/user/user-repository';
import { UserModel } from '../../models/user/user.model';

@Injectable({
    providedIn: 'root'
})
export class GetAllUsers implements UseCase<void, UserModel>  {
    constructor(private userRepository: UserRepository) { }
    
    execute(params: void): Observable<UserModel> {
        return this.userRepository.getAllUsers();
    }
}