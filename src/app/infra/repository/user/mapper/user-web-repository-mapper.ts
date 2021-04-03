import { Mapper } from "src/app/domain/models/base/mapper";
import { UserEntity } from "src/app/domain/models/user/user.entity";
import { UserModel } from "src/app/domain/models/user/user.model";

export class UserWebRepositoryMapper extends Mapper <UserEntity, UserModel> {
    mapFrom(param: UserEntity): UserModel {
      return {
        id: param.id,
        rolId: param.rolId,
        name: param.name,
        active: param.active
      };
    }
  
    mapTo(param: UserModel): UserEntity {
      return {
        id: 0,
        rolId: param.rolId,
        name: param.name,
        active: param.active        
      };
    }
  }