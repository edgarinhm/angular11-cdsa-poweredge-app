import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/services/data/data.service';
import { UserModel } from 'src/app/domain/models/user/user.model';
import { GetAllUsers } from 'src/app/domain/usecases/user/get-all-users';
import { AddUser } from 'src/app/domain/usecases/user/add-user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: Array<UserModel>;
  public editUser: UserModel;
  public deleteUser: UserModel;

  constructor(
    private data: DataService,
    private getAllUsers: GetAllUsers,
    private addUser: AddUser
  ) {}

  ngOnInit(){
    this.getUsers();
  }

  public getUsers(): void {
    this.users = [];  
    let payload = { 'rolId': 1, 'name': 'flor', 'active': 'si'};
    this.getAllUsers.execute(null).subscribe(
     (value: UserModel) => { this.users.push(value)
    });
  }

  public onAddUser(addForm: NgForm): void {    
    document.getElementById('add-user-form').click();
    this.addUser.execute(addForm.value).subscribe(
      (response: UserModel) => {
        console.log(response);
        this.getUsers();
        addForm.reset();
      (error: HttpErrorResponse) => {
        addForm.reset();
       };
     });
  }


}
