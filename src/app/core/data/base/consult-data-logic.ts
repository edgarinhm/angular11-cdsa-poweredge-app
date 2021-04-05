import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { UsersUsecases } from "../../domain/user/usecases/user/user-usecases";

@Injectable({
    providedIn: 'root'
})
export class ConsultDataLogic {

    constructor(private usersUsecases: UsersUsecases){}

    getAll(object: any):Observable<any> {
        let usecases = this.mappingObject(object);
        return usecases.get();
    }

    findBy(object: any, data: any) {
        let usecases = this.mappingObject(object);
        return usecases.findByName(data);
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
