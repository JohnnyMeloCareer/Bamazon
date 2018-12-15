DROP DATABASE IF EXISTS BamazonDB;
CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE products(
    item_id INT(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30),
    product_kind VARCHAR(30),
    department_name VARCHAR(30),
    price DECIMAL(4,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Skyrim", "Video Game", "GameStop", 60.00, 10);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Halo", "Video Game", "GameStop", 60.00, 10);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Zelda", "Video Game", "GameStop", 60.00, 10);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Splatoon 2", "Video Game", "GameStop", 60.00, 10);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Super Smash Bros Ultimate", "Video Game", "GameStop", 60.00, 10);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Pokemon Let's Go Pikachu", "Video Game", "GameStop", 60.00, 10);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Pokemon Let's Go Eevee", "Video Game", "GameStop", 60.00, 10);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Super Mario Party", "Video Game", "GameStop", 60.00, 10);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Mario Kart 8 Deluxe", "Video Game", "GameStop", 60.00, 10);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Xenoblade Chronicles 2", "Video Game", "GameStop", 60.00, 10);
