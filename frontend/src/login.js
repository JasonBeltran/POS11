import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';


const Login = () => {
    //all onsubmit variables 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [typeOfUser, setTypeOfUser] = useState('customer');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, typeOfUser);
        //we need to add the logic that would get the correct password and email for the customer
    };


    return (
        <div className = "firstlogin" >
            <div className = "container">
                <div className="image-section">
                    <img src="store.jpg" alt="Image of a store" />
                </div>

                {/*the actual login part */}
                <div className = "login-container">
                    <h2>Login</h2>
                    <div className = "tabs">
                        <button 
                            className = {`tab ${typeOfUser === 'customer' ? 'active': ''}`}
                            onClick = { () => setTypeOfUser('customer')}
                            >
                                Customer 
                        </button>
                        <button 
                            className = {`tab ${typeOfUser === 'supplier' ? 'active': ''}`}
                            onClick = { () => setTypeOfUser('supplier')}
                            >
                                Supplier 
                        </button>
                    </div>
                    <div className="box">
                        <form onSubmit = {handleSubmit}> 
                            <div>
                                <label>Email:</label>
                                <input 
                                    type = "email"
                                    value = {email}
                                    onChange = { (e) => setEmail(e.target.value)}
                                    required 
                                />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input 
                                    type = "password"
                                    value = {password}
                                    onChange = { (e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type = "submit">Login</button>
                        </form>
                        <p>
                            Don't have an account? <Link to = "/customer-Entry-Form">Sign Up</Link> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;