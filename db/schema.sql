
USE burgers_db;

CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name TEXT,
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)
);