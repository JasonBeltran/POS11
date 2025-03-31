const db = require('../config/db');

class Customer {
  static findByEmail(email, callback) {
    db.query('SELECT * FROM customer WHERE email = ?', [email], callback);
  }

  static create(customerData, callback) {
    const { firstName, middleInitial, lastName, phoneNumber, email, aptNum, houseNum, street, city, selectedState, zip, selectedCountry, dob, payment, password } = customerData;
    
    db.query(
      'INSERT INTO customer SET ?', 
      {
        first_name: firstName,
        middle_Initial: middleInitial,
        last_Name: lastName,
        Phone_Number: phoneNumber,
        Email: email,
        Apt_number: aptNum,
        House_num: houseNum,
        Street: street,
        City: city,
        state: selectedState,
        Zip_code: zip,
        Country: selectedCountry,
        DOB: dob,
        Payment_method: payment,
        customer_password: password
      },
      callback
    );
  }
}

module.exports = Customer;