# Comandos de Filtragem:

USE sakila;

## Encontre a pessoa atora Johnny Cage
SELECT * FROM actor WHERE first_name = "Johnny" AND last_name = "Cage";

## Encontre os filmes que podem ser alugados exatamente por 6 dias
SELECT title, rental_duration FROM film WHERE rental_duration=6;

## Conte os filmes que podem ser alugados exatamente por 6 dias
SELECT COUNT(*) FROM film WHERE rental_duration=6;

## Encontre os filmes de classificação R que podem ser alugados exatamente por 6 dias
SELECT * FROM film WHERE rental_duration=6 AND rating="R";

## Encontre os filmes de classificação R ou PG-13 que podem ser alugados exatamente por 6 dias
SELECT * FROM film WHERE rental_duration=6 AND (rating="R" OR rating="PG-13");
## Outra forma
SELECT * FROM film WHERE rating IN ('R', 'PG-13') AND rental_duration = 6;
-
## Encontre os filmes 'AFFAIR PREJUDICE','AFRICAN EGG', 'AGENT TRUMAN',  'AIRPLANE SIERRA'
SELECT * FROM film WHERE title IN ('AFFAIR PREJUDICE','AFRICAN EGG', 'AGENT TRUMAN',  'AIRPLANE SIERRA');

## Encontre todos os filmes menos os listados anteriormente.
SELECT * FROM film WHERE title NOT IN ('AFFAIR PREJUDICE','AFRICAN EGG', 'AGENT TRUMAN',  'AIRPLANE SIERRA');

## Encontre os filmes com duração entre 120 e 150 minutos
SELECT * FROM film WHERE length BETWEEN 120 AND 150 ORDER BY length;
## Outra forma
SELECT * FROM film WHERE length >= 120 AND length <= 150;

## Data e hora atual:
SELECT NOW();
SELECT LOCALTIME();

## Data Atual
SELECT CURDATE();

## Hora atual
SELECT CURTIME();

## Encontre alugueis feitos às 00h07m11s do dia 26/05/2005
SELECT * FROM rental WHERE rental_date = '2005-05-26 00:07:11';

## Encontre alugueis feitos no dia 26/05/2005 em qualquer horário
SELECT * FROM rental WHERE rental_date LIKE '2005-05-26 %';
## Outra forma
SELECT * FROM rental WHERE DATE(rental_date) = '2005-05-26';

## Encontre as devoluções de alugueis feitos entre 26/05/2005 e 27/06/2005
SELECT * FROM rental WHERE DATE(return_date) BETWEEN '2005-05-26' AND '2005-06-27' ORDER BY return_date;

## Encontre pessoas atoras com o primeiro nome contendo "rey"
SELECT * FROM actor WHERE first_name LIKE "%rey%";

## Encontre pessoas atoras com o primeiro nome com 3 caracteres, sendo o primeiro a letra "B"
SELECT * FROM actor WHERE first_name LIKE "B__";
