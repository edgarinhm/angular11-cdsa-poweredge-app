import { Injectable } from '@angular/core';
import { UsersUsecases } from './../../domain/user/usecases/user/user-usecases';

@Injectable({
    providedIn: 'root'
})
export class SaveDataLogic {

    constructor(private usersUsecases: UsersUsecases){}

    add(object: any, data: any) {
        let usecases = this.mappingObject(object);
        return usecases.add(data);
    }

    edit(object: any, data: any) {
        let usecases = this.mappingObject(object);
        return usecases.update(data);
    }
    
    
    delete(object: any, data: any) {
        let usecases = this.mappingObject(object);
        return usecases.delete(data);
    }

    mappingObject(object) {

        switch (object) {
            case 'User':
                return this.usersUsecases;
                break;
        
            default:
                break;
        }
    
    }
}


