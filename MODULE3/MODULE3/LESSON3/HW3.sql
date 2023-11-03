SELECT * FROM bank.client;

select * from bank.client where Department_idDepartment = '1' or Department_idDepartment = '2' or  Department_idDepartment = '4';

SELECT * FROM bank.client where age not between 30 and 35;

SELECT * FROM bank.client where lastname like '%iv';

SELECT * FROM bank.client where lastname regexp 'iv';

select * from bank.client where age<= '25' and age like '%5%';
