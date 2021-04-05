import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/core/domain/user/model/user-model';
import { UsersUsecases } from 'src/app/core/domain/user/usecases/user/user-usecases';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {

  public users: UserModel[];
  public editUser: UserModel;
  public deleteUser: UserModel;

  public columns: any;
  public rows: any;


  constructor(private userUsecase: UsersUsecases) { 
    this.columns = [      
      { name: 'Id', prop:'id' },
      { name: 'Name', prop:'name' },
      { name: 'Rol', prop:'rolid' },
      { name: 'Status', prop:'active' },
      { name: 'Actions', prop:'actions' }
    ];
  }

  ngOnInit() {
    this.getUsers();
    fetch('./assets/data/users.json').then(res => res.json())
      .then(json => {
        this.rows = json;
      });
  }

  getUsers(){
    this.users = [];
    this.userUsecase.getUsers().subscribe(
      (value: UserModel) => { 
        this.users.push(value);
        this.rows=value;        
        this.searchUsers('ed');
        this.searchUsers('florinda');
        this.onDeleteUser(21);
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
    //if (results.length === 0 || !key) {
      this.userUsecase.findUserByName(key).subscribe(
        (value: UserModel) => { 
          console.log(value)
          results.push(value);
       });
    //}
  }
  
  public onOpenModal(user: UserModel, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

}
