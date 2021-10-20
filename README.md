TypeScript Postgresql Delete All Tables Demo
==================================

```
brew install postgresql
psql postgres
```

```
create user "demo";
create database "typescript-postgresql-delete-all-tables-demo";
alter user "demo" with encrypted password '123456';
grant all privileges on database "typescript-postgresql-delete-all-tables-demo" to "demo";
```

Steps to run this project:

1. Run `npm i` command
3. Run `npm start` command
