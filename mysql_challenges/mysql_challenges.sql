DROP DATABASE IF EXISTS challenges_v1;
CREATE DATABASE challenges_v1;
USE challenges_v1;

/* 
Very Easy​: Create a table with your top three cars and include make, model, year.
Create a query to add in two more cars
*/

CREATE TABLE favorite_cars (
	year INT,
    make VARCHAR(20),
    model VARCHAR(20)
);

INSERT INTO favorite_cars (year, make, model)
VALUES (2020, 'McLaren', '720S'),
(2019, 'Porsche', 'GT3RS'),
(2020, 'Lamborghini', 'Huracan Evo');

INSERT INTO favorite_cars (year, make, model)
VALUES (2019, 'Ferrari', '488 Pista'),
(2017, 'Ferrari', 'F12 TDF');

/*
Easy​: Create a table with your top five favorite books with Title, Publish Date, and
Author First/Last Name Create a query to add in two new books Remove the oldest book 
Provide an additional query giving the sum of all books
*/

CREATE TABLE favorite_books (
	title VARCHAR(50),
    author VARCHAR(50),
    publication_date DATE
);

INSERT INTO favorite_books (title, author, publication_date)
VALUES ('Can\'t Hurt Me', 'David Goggins', '2018-11-15'),
('Becoming', 'Michelle Obama', '2018-11-18'),
('The Intelligent Investor', 'Benjamin Graham', '1949-01-15'),
('Think and Grow Rich', 'Napolean Hill', '1937-09-03'),
('Rich Dad Poor Dad', 'Robert Kiyosaki', '1997-04-01');

INSERT INTO favorite_books (title, author, publication_date)
VALUES ('The Millionaire Next Door', 'Thomas J. Stanley', '1996-12-02'),
('The 5 Second Rule', 'Mel Robbins', '2017-02-28');

DELETE FROM favorite_books
WHERE title = 'Think and Grow Rich';

SELECT COUNT(*) FROM favorite_books;

/*
Medium​: Create a table with your top 10 movies. Include title, release date, and rating
Create a query that pulls all movies, in order of release date, where the title includes the letter “s”.
*/

CREATE TABLE top_movies (
	release_date DATE,
    title VARCHAR(50),
    rating DECIMAL(2,1)
);

INSERT INTO top_movies (release_date, title, rating)
VALUES
('2001-06-22', 'The Fast and the Furious', 6.8),
('2003-06-06', '2 Fast 2 Furious', 5.9),
('2006-06-16', 'The Fast and the Furious: Tokyo Drift', 6.0),
('2009-04-03', 'Fast & Furious', 6.6),
('2011-04-29', 'Fast Five', 7.3),
('2013-05-24', 'Fast & Furious 6', 7.1),
('2015-04-03', 'Furious 7', 7.2),
('2017-04-14', 'The Fate of the Furious', 6.7),
('2019-08-02', 'Hobbs & Shaw', 6.5),
('2014-03-14', 'Need for Speed', 6.4);

SELECT * FROM top_movies
WHERE title LIKE '%s%'
ORDER BY release_date ASC;

/*
Hard​: Make a copy of your Medium Challenge
Write out the queries that would add the director’s First Name and Last Name into two separate columns.
Create a query that puts the names together.
Create a query to put the list in alphabetical order by the last name from A-Z 
After you order the list, remove the Movies where the Last Name ends with ”R-Z” 
Write a query where the first three appear
*/

CREATE TABLE top_movies_copy (
	release_date DATE,
    title VARCHAR(50),
    rating DECIMAL(2,1)
);

INSERT INTO top_movies_copy
SELECT * FROM top_movies;

ALTER TABLE top_movies_copy
ADD COLUMN dir_first_name VARCHAR(20),
ADD COLUMN dir_last_name VARCHAR(20);

UPDATE top_movies_copy
SET dir_first_name = 'Rob', dir_last_name = 'Cohen'
WHERE title = 'The Fast and the Furious';

UPDATE top_movies_copy
SET dir_first_name = 'John', dir_last_name = 'Singleton'
WHERE title = '2 Fast 2 Furious';

UPDATE top_movies_copy
SET dir_first_name = 'Justin', dir_last_name = 'Lin'
WHERE title = 'The Fast and the Furious: Tokyo Drift';

UPDATE top_movies_copy
SET dir_first_name = 'Justin', dir_last_name = 'Lin'
WHERE title = 'Fast & Furious';

UPDATE top_movies_copy
SET dir_first_name = 'Justin', dir_last_name = 'Lin'
WHERE title = 'Fast Five';

UPDATE top_movies_copy
SET dir_first_name = 'Justin', dir_last_name = 'Lin'
WHERE title = 'Fast & Furious 6';

UPDATE top_movies_copy
SET dir_first_name = 'James', dir_last_name = 'Wan'
WHERE title = 'Furious 7';

UPDATE top_movies_copy
SET dir_first_name = 'F. Gary', dir_last_name = 'Gray'
WHERE title = 'The Fate of the Furious';

UPDATE top_movies_copy
SET dir_first_name = 'David', dir_last_name = 'Leitch'
WHERE title = 'Hobbs & Shaw';

UPDATE top_movies_copy
SET dir_first_name = 'Scott', dir_last_name = 'Waugh'
WHERE title = 'Need for Speed';

SELECT concat(dir_first_name,' ',dir_last_name) AS `full_name` FROM top_movies_copy;

SELECT * FROM top_movies_copy
ORDER BY dir_last_name ASC;

DELETE FROM top_movies_copy
WHERE dir_last_name BETWEEN 'R' AND 'Z';

SELECT * FROM top_movies_copy
LIMIT 3;

/*
Very Hard​: Copy the table from your Very Easy Challenge
Write a query to add in three cars at once
Write a query to add in prices and colors for each of these cars 
Write a query to put the Make and Model together in one column 
Create a new query that adds an additional column to the results to show how many cars have the same Make.
*/

CREATE TABLE favorite_cars_copy (
	year INT,
    make VARCHAR(20),
    model VARCHAR(20)
);

INSERT INTO favorite_cars_copy 
SELECT * FROM favorite_cars;

INSERT INTO favorite_cars_copy
VALUES
(2018, 'Dodge', 'Demon'),
(2019, 'Chevrolet', 'Corvette ZR1'),
(2019, 'Chevrolet', 'Camaro ZL1');

ALTER TABLE favorite_cars_copy
ADD COLUMN price INT,
ADD COLUMN color VARCHAR(20);

UPDATE favorite_cars_copy
SET price = 115000, color = 'Red'
WHERE model = 'Demon';

UPDATE favorite_cars_copy
SET price = 125000, color = 'Black'
WHERE model = 'Corvette ZR1';

UPDATE favorite_cars_copy
SET price = 60000, color = 'Black'
WHERE model = 'Camaro ZL1';

SELECT concat(make,' ',model) AS `make_model` FROM favorite_cars_copy;

SELECT make, COUNT(make) FROM favorite_cars_copy GROUP BY make HAVING COUNT(make) > 1;


