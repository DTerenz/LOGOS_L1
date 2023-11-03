-- create database logos_qa;
-- create database if not exists logos_AQ;
-- drop database logos_aq;
-- use logos_qa;
create table users(
id int(5) auto_increment primary key,
firstName varchar(10) not null,
secondName varchar(10) not null,
email varchar(40) unique not null,
phone varchar(10) not null,
age int(2) default 18 check(age>0 and age<100)
);
create table group_name
(
id int(4) auto_increment primary key,
name varchar(8) not null,
userID int (4),
foreign key (userID) references users(id)
)
