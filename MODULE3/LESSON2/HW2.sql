select * from client;
select * from bank.client where city = 'Lviv';

select LastName, FirstName from bank.client where age = 21;

select * from bank.client where Education = 'high';

select * from bank.client where Education = 'middle' and City!='Lviv';

select * from bank.client where age <= 30 and age >= 29 and Department_idDepartment!=4;

