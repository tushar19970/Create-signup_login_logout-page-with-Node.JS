require('dotenv').config();
const knex = require('knex')({
    client : "mysql",
    connection : {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
    }
})

knex.schema.createTable('Data', (table) => {
    table.increments('id')
    table.string('Name').notNullable()
    table.string("Last_name").notNullable()
    table.string('Email').notNullable()
    table.string('Password').notNullable()
}).then((data) => {
    console.log("Table has created successfully..")
}).catch((err) => {
    console.log("Table has already created...")
})

module.exports = knex