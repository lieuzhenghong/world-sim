CREATE DATABASE IF NOT EXISTS userInfo; 
CREATE TABLE IF NOT EXISTS users
(
	user_id int,
	username varchar(255),
	ign varchar(255),
);

CREATE TABLE IF NOT EXISTS items 
(
	item_id integer primary key not null,
	username varchar(255) not null references players(username),
	item_name varchar(255) not null
);