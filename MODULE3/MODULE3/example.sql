create table client(
id int(10) unique not null,
firstName varchar(10) not null,
secondName varchar(10) not null,
age int(2) default 18 check(age>0 and age<100),
phone varchar(13) unique not null
);
drop table client;
select * from client;
alter table client add column phone varchar(13) unique null;
-- alter table add column secondName varchar(10) not null; 
alter table client add column secondName varchar(10) not null;
alter table client add column age int(2) check(age>18 and age<100);
insert into client(id, firstName) values(1, 'Ann');
insert into client(id, firstName) values(2,'Mat');
insert into client(id, firstName) values(3,'Art');
insert into client(id, firstName) values(4,'Marty');
insert into client(id, firstName) values(5,'Amder');
insert into client(id, firstName) values(6,'Tom');
insert into client(id, firstName) values(7,'Jeffer');

insert into client(id, firstName, secondName, age, phone) values(1, 'Ann', 'Blakson', 22, 380345554441);
insert into client(id, firstName, secondName, age, phone) values(2, 'Jack', 'Jackson', 25, 380364512587);
insert into client(id, firstName, secondName, age, phone) values(3, 'Jun', 'Kokson', 42, 380125458781);
insert into client(id, firstName, secondName, age, phone) values(4, 'Yack', 'Uackon', 31, 380268537547);
insert into client(id, firstName, secondName, age, phone) values(5, 'Any', 'Draken', 51, 380265864928);
insert into client(id, firstName, secondName, age, phone) values(6, 'Bleg', 'Kermans', 27, 380735263763);
insert into client(id, firstName, secondName, age, phone) values(7, 'Bob', 'Leyn', 74, 380982768292);
insert into client(id, firstName, secondName, age, phone) values(8, 'Dack', 'Greyson', 35, 380865796927);





