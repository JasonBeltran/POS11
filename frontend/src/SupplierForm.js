import React, { useState } from 'react';
import "./SupplierForm.css";

const SignupForm = () => {
    // Initialization of object variables

    const [companyName, setCompanyName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleInit, setMiddleInit] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [aptNumber, setAptNumber] = useState('');
    const [city, setCity] = useState('');
    const [supplierCountry, setCountry] = useState('');
    const [supplierState, setSupplierState] = useState('');
    const [zipCode, setZipCode] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const supplierInfo = { companyName, firstName, middleInit, lastName, phoneNumber, email, aptNumber, street, city, supplierState, zipCode, supplierCountry }
        console.log('Form submitted:', supplierInfo);
    };

    return (
        <div className="page-container">
            <form onSubmit={handleSubmit} className="form-container">
                <h1>Supplier Sign Up</h1>
                <div className="form-element">
                    <label>Company Name
                        <input type="text"
                            value={companyName}
                            maxLength={50}
                            onChange={e => setCompanyName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-element">
                    <label>First Name
                        <input type="text"
                            value={firstName}
                            maxLength={20}
                            onChange={e => setFirstName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-element">
                    <label>Middle Initial
                        <input type="text"
                            value={middleInit}
                            maxLength={1}
                            onChange={e => setMiddleInit(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-element">
                    <label>Last Name
                        <input type="text"
                            value={lastName}
                            maxLength={30}
                            onChange={e => setLastName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-element">
                    <label>Phone
                        <input type="tel"
                            value={phoneNumber}
                            maxLength={10}
                            onChange={e => setPhoneNum(e.target.value)}
                            placeholder="123-456-7890"
                            required
                        />
                    </label>
                </div>
                <div className="form-element">
                    <label>Email
                        <input type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="example@example.com"
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            required
                        />
                    </label>
                </div>
                <h3>Address Information</h3>
                <div className="form-element">
                    <label>Apartment Number
                        <input type="number"
                            value={aptNumber}
                            onChange={e => setAptNumber(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-element">
                    <label>Street
                        <input type="text"
                            value={street}
                            maxLength={50}
                            onChange={e => setStreet(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-element">
                    <label>City
                        <input type="text"
                            value={city}
                            maxLength={40}
                            onChange={e => setCity(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-element">
                    <label>State
                        <select value={supplierState} onChange={e => setSupplierState(e.target.value)}>
                            {["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
                                "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
                                "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
                                "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
                                "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"].map((supplierState) => (
                                    <option key={supplierState} value={supplierState}>{supplierState}</option>
                                ))}
                        </select>
                    </label>
                </div>
                <div className="form-element">
                    <label>Zip Code
                        <input type="number"
                            pattern="^\d*$"
                            value={zipCode}
                            maxLength={9}
                            onChange={ e => setZipCode(e.target.value)} />
                    </label>
                </div>
                <div className="form-element">
                    <label>Country
                        <input type="text"
                            value={supplierCountry}
                            onChange={e => setCountry(e.target.value)}
                            maxLength={50} />
                    </label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
