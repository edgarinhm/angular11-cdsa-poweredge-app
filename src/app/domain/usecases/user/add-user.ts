import { UserEntity } from 'src/app/domain/models/user/user.entity';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserWebRepository } from 'src/app/infra/repository/user/user-web-repository';
import { UseCase } from '../../models/base/use-case';
import { UserRepository } from '../../models/user/user-repository';
import { UserModel } from '../../models/user/user.model';

@Injectable({
    providedIn: 'root'
  })
export class GetAllUsers implements UseCase<UserEntity, UserModel>  {
    constructor(private userRepository: UserRepository) { }
    
    execute(params: UserEntity): Observable<UserModel> {
        return this.userRepository.addUser(params);
    }
}