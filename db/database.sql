CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT, 
    name VARCHAR(55) DEFAULT NULL, 
    salary INT(6) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES 
(1,'Joel',2000),
(2,'Tobie',5000),
(3,'Tobie',1500),
(4,'Alf',9000),
(5,'Ale',8000);
