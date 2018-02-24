
CREATE DATABASE Forest_DB;
USE Forest_DB;

CREATE TABLE trees
(
    id int NOT NULL AUTO_INCREMENT,
     tree_name varchar (255) NOT NULL,
    planted boolean NOT NULL,
    PRIMARY KEY (id)
);