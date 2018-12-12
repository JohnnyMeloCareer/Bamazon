DROP DATABSE IF EXISTS BamazonDB;
CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE products(
    item_id INT AUTO INCREMENT NOT NULL,
    product_name VARCHAR(30),
    product_kind VARCHAR(30),
    department_name VARCHAR(30),
    price DECIMAL(4,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Skyrim", "Video Game", "GameStop", 60.00, 20);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Halo", "Video Game", "GameStop", 60.00, 20);

INSERT INTO products (product_name, product_kind, department_name, price, stock_quantity)
VALUES ("Zelda", "Video Game", "GameStop", 60.00, 20);
