Feature: User Search
As a client 
I want to search users by key words to find them more easy

Scenario: User macthes
When Client texts a valid word to find user coincidences on search input and press the lent icon
Then App will look into database to find a match 
And shows the results in datatable

Scenario: User Update
When Client no texts any word to find user coincidences on search input and press the lent icon
Then App will show all Users in datatable

Scenario: User Delete
When Client no texts any word to find user coincidences on search input and press the lent icon
Then App will show all Users in datatable