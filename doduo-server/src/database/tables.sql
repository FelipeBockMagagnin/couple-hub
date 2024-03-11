CREATE TABLE users (
 id SERIAL CONSTRAINT pk_id_users PRIMARY KEY,
 id_google varchar(150) not null,
 name varchar(150) NOT NULL, 
 email varchar(150) NOT NULL
);

CREATE TABLE houses (
 id SERIAL CONSTRAINT pk_id_users PRIMARY KEY,
 name varchar(150) not null,
 code varchar(150) NOT NULL
);