INSERT INTO department (name) 
VALUES  ("Legal"),
        ("Marketing"),
        ("Logistics"),
        ("Human Resources"),
        ("Sales");

INSERT INTO role (title, salary, departent_id)
VALUES  
        ("Lawyer", 120000, 1),
        ("Paralegal", 55000, 1),
        ("Market Research Analyst", 60000, 2),
        ("Social Media Specialist", 45000, 2),
        ("Marketing Director", 110000, 2);
        ("Logistics Manager", 100000, 3),
        ("Inventory Specialist", 70000, 3),
        ("HR Manager", 90000, 4),
        ("Benefits Specialist", 60000, 4),
        ("Sales Analyst", 65000, 5),
        ("Account Executive", 70000, 5),
        ("Sales Rep", 50000, 5),
        ("Sales Manager", 90000, 5)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
        ("Emily", "Johnson", 1, null),
        ("Michael", "Smith", 2, 1),
        ("Jessica", "Lee", 3, 5),
        ("David", "Martinez", 4, 5),
        ("Sarah", "Brown", 5, null),
        ("James", "Wilson",6 , null),
        ("Laura", "Garcia", 7, 6),
        ("Robert", "Hernandez", 8, 0),
        ("Linda", "Williams", 9, 8),
        ("Daniel", "Jones", 10, 13),
        ("Emma", "Taylor", 11, 13),
        ("Brian", "Davis", 12, 13),
        ("Rachel", "Miller", 13, null),
        ("Christopher", "Lopez",2 ,1),
        ("Amanda", "Anderson" ,2 ,1),
        ("Jason", "Thomas",12 ,13),
        ("Ashley", "Rodriguez",11 ,13),
        ("Matthew", "Martinez",7 ,6),
        ("Elizabeth", "Harris",3 ,5),
        ("Richard", "Clark",4 ,5).
