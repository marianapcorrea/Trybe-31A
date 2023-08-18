# COMANDOS  
## SELECT 1+5 as soma, 'Mari' as nome, 50*10 as multiplicacao FROM sakila.actor;
*SELECT DISTINCT first_name FROM sakila.actor;*

## Deixa o database selecionado
*USE sakila*;

## Concatenação
*SELECT CONCAT(first_name, ' ' , last_name) as full_name FROM actor;*

## Paginação: 
*SELECT * FROM actor  LIMIT 20 OFFSET 40;*

## Conta Número de linhas na tabela. Não conta valores nulos.
SELECT COUNT(*) FROM actor; 

## Função coalesce substitui valores nulos (no caso, o valor de cada address 2 para uma string vazia)
*SELECT COUNT(coalesce(address2, "")) FROM address WHERE address2 IS NULL;*

## Outra forma de contar nulos.
SELECT COUNT(*) - COUNT(address2) FROM address;

## Ordenação de exibição. DESC é Descendente. 
*SELECT * FROM film ORDER BY rental_duration DESC, rental_rate, title;*

