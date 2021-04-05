Feature: User CRUD
As a client 
I want to list, create, edit, and delete users

Scenario: User Create
When Client press the create icon
Then App will present a form with inputs like name, rol, is active
And All inputs must be required except user id, additionaly the form must validate inputs

Scenario: User Read
When Client enters to User module 
Then App will show all Users in datatable
But Pagination is optional for more than 10 records

Scenario: User Update
When Client press the edit icon
Then App will present a form with user data all inputs like name, rol, is active
And Inputs name, rol, is active are editable
But id User is readonly

Scenario: User Delete Yes
When Client press the delete icon
Then App will promt a message with an alert asking to the client if hi want to delete the records
And option Yes is selected, will delete from database, and refresh User list view datatable

Scenario: User Delete No
When Client press the delete icon
Then App will promt a message with an alert asking to the client if hi want to delete the records
And option Nes is selected, will close promt to list view datatable
