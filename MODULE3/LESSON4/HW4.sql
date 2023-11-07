SELECT * FROM bank.client;

select * from bank.client order by age asc;

select * from bank.client where city = 'Kyiv' order by lastname desc;

select * from bank.client order by age desc limit 3;

select * from bank.client order by age asc limit 1;
select * from bank.client where age = (select min(age) from bank.client);


select * from bank.client where age > (select avg(age) from bank.client);
