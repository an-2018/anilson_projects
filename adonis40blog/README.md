# AdonisJS GetingStarted

## Setup new project
``` bash
npm install @adonisjs/cli
adonis new new project_name
```

## Running a mysql docker container
```
docker pull mysql
docker-compose up
```
use docker-compose yml
```
version: '3.1' # docker compose version

services:
    db:
        image: mysql
        restart: always
        environment:
            MYSQL_ROOT_PASSWORD: root
            MYSQL_DATABASE: test_db
        ports:
            - "3307:3306"
        volumes:
            - $HOME/Desktop/Mysql_files/test.sql:/mysql_files/test.sql
```
Then connect to the database with:
``` 
docker exec -it <container name or id> bash
> mysql -uroot -proot
> SHOW DATABASES
```


### Connecting with dbeaver 
- add configuration with error
    - [MySQL Public Key Retrieval is not allowed](https://community.atlassian.com/t5/Confluence-questions/MySQL-Public-Key-Retrieval-is-not-allowed/qaq-p/778956?tempId=eyJvaWRjX2NvbnNlbnRfbGFuZ3VhZ2VfdmVyc2lvbiI6IjIuMCIsIm9pZGNfY29uc2VudF9ncmFudGVkX2F0IjoxNjA0NjYyODI3NzI3fQ%3D%3D)
### Connecting from node (adonis migration)
- sqlMessage:
   'Client does not support authentication protocol requested by server; consider upgrading MySQL client'
        - add :
        ```
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
        flush privileges;
        ```
- the create the database and run migrations from  adonis
```
npm i mysql
adonis migration:run 
```
#   Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
