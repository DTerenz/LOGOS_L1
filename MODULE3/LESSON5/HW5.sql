SELECT * FROM bank.client;


select FirstName, Passport from bank.client order by FirstName asc;

select * from bank.client
inner join bank.application
on idClient = Client_idClient
where Sum > 5000
; 


SELECT count(idClient) as AllClients FROM bank.client;
SELECT count(city) as ClientsOfLviv FROM bank.client
where city = 'Lviv';



select FirstName, max(sum) from bank.client
inner join bank.application
on Client_idClient = idClient 
group by Client_idClient
;



select max(sum), min(sum) from bank.application;









