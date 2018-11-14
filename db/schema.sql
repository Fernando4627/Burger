CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT not null, 
    burger_name VARCHAR,
    devoured boolean DEFAULT FALSE,
    PRIMARY KEY(id)
);