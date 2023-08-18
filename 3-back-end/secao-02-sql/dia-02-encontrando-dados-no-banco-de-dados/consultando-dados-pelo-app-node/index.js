const connection= require('./connection')

const main = async() => {
const result = await connection.execute('SELECT CONCAT(first_name, " " , last_name) as full_name FROM actor;')
console.log(result)
}

main()

