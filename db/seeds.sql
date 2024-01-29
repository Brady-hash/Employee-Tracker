USE employees_db;

INSERT INTO department (name) 
VALUES  ('Legal'),
        ('Marketing'),
        ('Logistics'),
        ('Human Resources'),
        ('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES  
        ('Lawyer', 120000, 1),
        ('Marketing Director', 110000, 2),
        ('Logistics Manager', 100000, 3),
        ('HR Manager', 90000, 4),
        ('Sales Manager', 90000, 5),
        ('Paralegal', 55000, 1),
        ('Market Research Analyst', 60000, 2),
        ('Social Media Specialist', 45000, 2),
        ('Inventory Specialist', 70000, 3),
        ('Benefits Specialist', 60000, 4),
        ('Sales Analyst', 65000, 5),
        ('Account Executive', 70000, 5),
        ('Sales Rep', 50000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
        ('Emily', 'Johnson',1 ,null ),
        ('Michael', 'Smith',2 ,null ),
        ('Jessica', 'Lee',3 ,null ),
        ('David', 'Martinez',4 ,null ),
        ('Sarah', 'Brown',5 ,null ),
        ('James', 'Wilson',6 ,1 ),
        ('Laura', 'Garcia',6 ,1 ),
        ('Robert', 'Hernandez',7 ,2 ),
        ('Linda', 'Williams',8 ,2 ),
        ('Daniel', 'Jones',9 ,3 ),
        ('Emma', 'Taylor',9 ,3 ),
        ('Brian', 'Davis',9 ,3 ),
        ('Rachel', 'Miller',10 ,4 ),
        ('Christopher', 'Lopez',11 ,5 ),
        ('Amanda', 'Anderson',11 ,5 ),
        ('Jason', 'Thomas',11 ,5 ),
        ('Ashley', 'Rodriguez',12 ,5 ),
        ('Matthew', 'Martinez',13 ,5 ),
        ('Elizabeth', 'Harris',13 ,5 ),
        ('Richard', 'Clark',13 ,5 );




