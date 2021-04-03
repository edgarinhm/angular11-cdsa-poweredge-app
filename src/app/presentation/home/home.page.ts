import { UserModel } from './../../core/domain/user/model/user-model';
import { UsersUsecases } from './../../core/domain/user/usecases/user/user-usecases';
import { Component } from '@angular/core';
import { DataService, Message } from 'src/app/core/data/services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public users: UserModel[];
  public editUser: UserModel;
  public deleteUser: UserModel;

  constructor(private data: DataService, private userUsecase: UsersUsecases) {
    this.getUsers();
  }

  getUsers(){
    this.userUsecase.getUsers().subscribe(
      (value: UserModel) => { this.users.push(value)
     });
  }

  public onAddUser(addForm: NgForm): void {    
    document.getElementById('add-user-form').click();
    this.userUsecase.addUser(addForm.value).subscribe(
      (response: UserModel) => {
        console.log(response);
        this.getUsers();
        addForm.reset();
      (error: HttpErrorResponse) => {
        addForm.reset();
       };
     });
  }

  public onUpdateUser(user: UserModel): void {
    this.userUsecase.updateUser(user).subscribe(
      (response: UserModel) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteUser(userId: number): void {
    this.userUsecase.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchUsers(key: string): void {
    console.log(key);
    const results: UserModel[] = [];
    for (const user of this.users) {
      if (user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(user);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.userUsecase.findUserByName(key);
    }
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
