const express = require('express');
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if(err) {
        return console.log('Error connecting to the database: ', err)
    }
    console.log('Successfully connected to the MySql:', db.threadId)
})


// Question 1
/*app.get('', (req, res) => {
    const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
    db.query(getPatients, (err, data) => {
        if(err){
            return res.status(400).send('Failed to get patients', err)
        }res.status(200).send(data)
    })
})*/

// Question 2
/*app.get('', (req, res) => {
    const getProviders = "SELECT first_name, last_name, provider_specialty FROM providers"
    db.query(getProviders, (err, data) => {
        if(err){
            return res.status(400).send('Failed to get providers', err)
        }res.status(200).send(data)
    })
})*/

// Question 3
/*app.get('', (req, res) => {
    const getPatients = "SELECT first_name FROM patients"
    db.query(getPatients, (err, data) => {
        if(err){
            return res.status(400).send('Failed to get patients', err)
        }res.status(200).send(data)
    })
})*/

// Question 4
/*app.get('', (req, res) => {
    const getProviders = "SELECT provider_specialty FROM providers"
    db.query(getProviders, (err, data) => {
        if(err){
            return res.status(400).send('Failed to get providers', err)
        }res.status(200).send(data)
    })
})*/

app.listen(3400, () => {
    console.log('Server is running on port 3400... ')
})