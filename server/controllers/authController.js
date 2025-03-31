const Customer = require('../models/Customer');
const Supplier = require('../models/Supplier');

exports.login = (req, res) => {
  const { email, password, typeOfUser } = req.body;

  const Model = typeOfUser === 'customer' ? Customer : 
                typeOfUser === 'supplier' ? Supplier : null;

  if (!Model) return res.status(400).send('Invalid user type');

  Model.findByEmail(email, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).send('Invalid Credentials');
    }

    const user = results[0];
    delete user.password;
    res.json({
      success: true,
      user: {
        first_name: user.first_name,
        last_Name: user.last_Name
      }
    });
  });
};