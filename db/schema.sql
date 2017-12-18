
USE burgers_db;

CREATE TABLE burgers (
	id INTEGER AUTO-INCREMENT NOT NULL,
	burger_name TEXT,
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)
);