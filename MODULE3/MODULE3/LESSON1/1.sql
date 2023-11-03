-- create database logos;
 -- use logos;
-- create table users
-- (
-- id int(4) auto_increment primary key,
-- firstName varchar(15) not null,
-- secondName varchar(20) not null,
-- email varchar(40) unique not null,
-- phone varchar(13) null,
-- AGE INT(2) default 18 check(age>0 and age<100)
-- );
 
 -- create table persons
-- (
-- id int(4) auto_increment primary key,
-- name varchar(15) not null,
-- userID int(4),
-- foreign key(userID) references users(id)
-- );





create database cinema;
use cinema;
create table viewer
(
firstName varchar(10) not null,
secondName varchar(10) not null
);
create table ticket
(
numberTicket int(2) auto_increment primary key,
numberHall int(2) not null,
numbeRow int(2) not null,
seat int(2) not null,
cost float(6) not null,
descriptio tinytext not null,
movieTitle varchar(30) not null,
date
time
);
