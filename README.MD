# Create signup, login and logout application-in-Node-js
In this project, I have made a back-end of Create signup, login and logout application form using Express framework of NodeJS. I have also used JWT-authentication token to verify the user..

-------------------------------------------------------------------------------------

## Task Details:
### Lets make a Create signup, login and logout application with only the restful API. A user should be able to do:

    -Register using :- (Name & Last_name & Email & Password) for create user signup.. If user will not fill all the content so user could not signup..
    -Simple Login :- (Email & Password) for login user have to write the Email and Password only. Which is he used in signup time. 
    -Logout user :- user accessToken which he generated in login time and go to the postman, write the logout after port number.  
    
### In this project I have used MySQL, Express, Nodemon, Knex, Bcrypt, Dotenv, JsonWebToken.
    
    - Express :- I used this backend framework for creating a server...
    - MySQL :- I used Mysql database for creating a table in mysql database, then store the users data in table. It is stored in row and column format. 
    - Knex :- I used knex query builder for write the Apis. 
    - Dotenv :- I used this for allows us to separate secrets from our source code.
    - Bcrypt :- I used this for For security purposes, it is essential to salt and hash passwords before storing them in a secure database.
    - JsonWebToken :- I used this for user authentication when he will be login this page and his cookies data stored in local server after that he will accsess the token when he will logout his account so his cookie data will be deleted from local server. 

# Postman 
    - Postman :- I used this local server to an application used for API testing. I create the three collection on postman and download. 

## Installation
#### NodeJs and NPM

    $ sudo apt-get update 
    $ sudo apt-get install curl 
    $ sudo apt install build-essential apt-transport-https lsb-release ca-certificates curl 
    $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    $ sudo apt install nodejs
    $ sudo apt install npm

### MYSQL

    $ sudo apt-get update
    $ sudo apt-get install mysql-server
    $ sudo mysql -u root -p
    
#### ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
Package Installation

    $ npm install 'package_name'
