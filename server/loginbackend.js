const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'possystem11.mysql.database.azure.com',
    user: 'posadmin11',
    password: 'Umateam11',
    database: 'umateam11pos',
    ssl: { rejectUnauthorized: true },
    port: 3306,
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.post('/login', (req, res) => {
    const { email, password, typeOfUser } = req.body;

    let table
    if (typeOfUser === 'customer'){
        table = 'customer';
    }
    else if (typeOfUser === 'supplier') {
        table = 'supplier';
    } else {
        return res.status(400).send('Invalid user type');
    }

    const query = `SELECT first_name, last_Name FROM ${table} WHERE Email = ? AND password = ?`;

    db.query( query, [email, password], (err,results) => {
        if (err) return res.status(500).send(err);
        if(results.length === 0) return res.status(401).send('Invalid Credentials');

        const user = results[0];
        delete user.password;
        res.json({success: true, user: {
            first_name: user.first_name,
            last_Name: user.last_Name
        }});
    });
});

app.post('/customer-entry-form', (req,res) => {
    const {firstName, middleInitial, lastName, phoneNumber, email, aptNum, houseNum, street, city, selectedState, zip, selectedCountry, dob, payment, password} = req.body;
    const checkQuery = 'SELECT * FROM customer WHERE email = ?';

    db.query(checkQuery, [email], (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length > 0 ) return res.status(409).send('Email already exists');

        const insertQuery = 'INSERT INTO customer (first_name, middle_Initial, last_Name, Phone_Number, Email, Apt_number, House_num, Street, City, state, Zip_code, Country, DOB, Payment_method, customer_password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        db.query(insertQuery, [firstName, middleInitial, lastName, phoneNumber, email, aptNum, houseNum, street, city, selectedState, zip, selectedCountry, dob, payment, password], (err, results) => {
            if (err) {
                console.error("Error inserting data:", err);  
                return res.status(500).send('Error inserting data');
            }
            const query = `SELECT first_name, last_Name FROM customer WHERE Email = ? AND customer_password = ?`;

            db.query( query, [email, password], (err,results) => {
                if (err) return res.status(500).send(err);
                if(results.length === 0) return res.status(401).send('Invalid Credentials');
        
                const user = results[0];
                delete user.password;
                res.json({success: true, user: {
                    first_name: user.first_name,
                    last_Name: user.last_Name
                }});
            });
        });
    });
});

app.post('/supplier-entry-form', (req,res) => {
    const {company, firstName, middleInitial, lastName, phoneNumber, email, aptNum, houseNum, street, city, selectedState, zip, selectedCountry, password, dob} = req.body;

    const nullify = (value) => (value === '' ? null: value);

    const checkQuery = 'SELECT * FROM supplier WHERE email = ?';

    db.query(checkQuery, [email], (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length > 0 ) return res.status(409).send('Email already exists');

        const insertQuery = 'INSERT INTO supplier (Company_Name, first_name, middle_Initial, last_Name, Phone_Number, Email, Apt_number, House_num, Street, City, State, Zip_code, Country, password, DOB) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        db.query(insertQuery, [company, firstName, nullify(middleInitial), lastName, nullify(phoneNumber), email, nullify(aptNum), nullify(houseNum), nullify(street), nullify(city), nullify(selectedState), nullify(zip), nullify(selectedCountry), nullify(password), nullify(dob)], (err, results) => {
            if (err) {
                console.error("Error inserting data:", err);  // Log the full error
                return res.status(500).send('Error inserting data');
            }
            const query = `SELECT first_name, last_Name FROM supplier WHERE Email = ? AND password = ?`;

            db.query( query, [email, password], (err,results) => {
                if (err) return res.status(500).send(err);
                if(results.length === 0) return res.status(401).send('Invalid Credentials');
        
                const user = results[0];
                delete user.password;
                res.json({success: true, user: {
                    first_name: user.first_name,
                    last_Name: user.last_Name
                }});
            });
        });
    });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));