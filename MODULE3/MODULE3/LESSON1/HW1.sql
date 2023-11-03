create database if not exists cinema;
use cinema;
create table tiket(
id int(10) unique not null,
Квиток int(10) unique not null,
Назва varchar(15) not null,
Дата date,
Час time,
Зал int (1) not null,
Ряд int (2) not null,
Місце int (2) not null,
Вартість float(6) not null,
Опис tinytext not null
);
create table person(
id int(10) unique not null,
userID int(5) not null,
firstName varchar(10) not null,
secondName varchar(10) not null,
age int(2) default 18 check(age>0 and age<100),
foreign key (userID) references tiket(id)
);
