# basic-api-server

# basic-express-server

## Live Deploy
[Heroku](https://smith-basic-api-server.herokuapp.com/)

## Deployment
How do I install the app or library?
Clone this app and install all dependencies.
How do I test the app or library?
Run "NPM test" in the terminal once all dependencies are installed.
For Applications:
How do I run the app?
How do I set up the app?

## Testing
Write a complete set of tests for all functional units and modules
Your tests must be running green on Github Actions
[TESTS](./__tests__)

## Documentation
Compose a UML or Process/Data Flow Diagram for every application
UML Reference
![Lab03](img/lab3.png)
This should be the first thing you do when beginning work on a lab assignment.
Draw the process/data flow of your application and map it to the code you will need to write or evaluate/fix.

### Routes

GET : /food

GET : /food/:id

POST : /food (body {"foodName" : "food name"})

PUT : /food/:id (body {"foodName" : "updated food name"})

DELETE: /food/:id