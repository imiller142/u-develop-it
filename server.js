const express = require('express');
const mysql = require('mysql2');



const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password1',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// database call
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// default response for any other request (not found)

app.use((req, res) => {
    res.status(404).end()
});

app.listen(PORT, () => {
    console.log(`Server is running on prot ${PORT}`);
});