-- COMANDOS
use sakila;
SELECT * FROM film;

-- Menor duração de locação de um filme
SELECT MIN(rental_duration) FROM film;

-- Menor duração de locação de um filme
SELECT MAX(rental_duration) FROM film;

-- Duração média de locação de um filme (arredondado)
SELECT ROUND(AVG(rental_duration)) FROM film;

-- Total de duração de locação de todos os registros.
SELECT SUM(rental_duration) FROM film;

-- Condicional IF
SET @idade = 19;
SELECT IF(@idade>=18, 'aeeee', 'ops');

-- Mostra se o filme é caro ou barato. Abaixo de 3, é barato. Acima é caro.
SELECT title, 
	IF(rental_rate<3.0, 'barato', 'caro') as valor
FROM film;

-- Condicional WHEN
SET @idade = 17;
SELECT CASE
	WHEN @idade=17 THEN 'almost'
    WHEN @idade=17 THEN 'aeeee'
    ElSE 'hmmmm'
END AS maior_idade, 1, 5+10;

SELECT  title, `length`,
 CASE
	WHEN `length`<60 THEN 'Curto'
    WHEN `length`>150 THEN 'Longo'
    ELSE 'Medio'
END AS duration
FROM film;

-- Group By
SELECT * FROM address
GROUP BY city_id;

-- Agrupar clientes por loja.
SELECT store_id, COUNT(*) AS total_clientes FROM customer GROUP BY store_id;

-- Contar quantos clientes estão em cada loja.
SELECT store_id, COUNT(*) AS total_clientes FROM customer GROUP BY store_id;

-- Juntar os emails dos cliebtes de cada loja em arrays
SELECT store_id, JSON_ARRAYAGG(email)
FROM customer
GROUP BY store_id;
-- Outra forma:
SELECT 
    GROUP_CONCAT(email) AS all_clients_emails
FROM
    sakila.customer
GROUP BY store_id; 

-- Recuperar apenas distritos com mais de 5 endereços cadastrados
SELECT district, COUNT(*) as quantidade FROM address 
GROUP BY district
HAVING quantidade>5
ORDER BY quantidade Desc