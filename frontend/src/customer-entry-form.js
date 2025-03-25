//needs the "country-state-city" library
import { useState } from "react";
import { Country, State } from 'country-state-city';
import './customer-entry-form.css';

const CustomerEntryForm = () => {
    {/* Variables that the customer would contain */}
    const [firstName, setfirstName] = useState('');
    const [middleInitial, setmiddleInitial] = useState('');
    const [lastName, setLastName] = useState('');
    const [payment, setPayment] = useState("Select");
    const [dob, setDob] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [aptNum, setAptNum] = useState('');
    const [houseNum, sethouseNum] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    const countries = Country.getAllCountries();
    const state = selectedCountry ? State.getStatesOfCountry(selectedCountry) : [];

    {/* Function to place all the values into customer once hit submit */}
    const handleSubmit = (e) => {
        e.preventDefault();
        const customer = { firstName, middleInitial, lastName, dob, phoneNumber, aptNum, houseNum, street, city, zip, selectedCountry, selectedState, payment };
        console.log(customer);
    }

    return (
        <div className="first">
            <div className="customerEntryForm">
                <h1>Customer Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    
                    {/* Personal Information Section */}
                    <div className="form-section">
                        <h2>Personal Information</h2>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                required
                                maxLength={20}
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Middle Initial</label>
                            <input
                                type="text"
                                maxLength={1}
                                value={middleInitial}
                                onChange={(e) => setmiddleInitial(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                required
                                maxLength={30}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Day of Birth</label>
                            <input
                                type="date"
                                required
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Method of Payment</label>
                            <select
                                value={payment}
                                onChange={(e) => setPayment(e.target.value)}
                            >
                                <option value="Select">Select</option>
                                <option value="Visa">Visa</option>
                                <option value="Mastercard">Mastercard</option>
                                <option value="American Express">American Express</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Enter your example.com email</label>
                            <input
                                type="email"
                                id="email"
                                pattern=".+@example\.com"
                                maxLength={30}
                                required
                            />
                        </div>
                    </div>

                    {/* Address Information Section */}
                    <div className="form-section">
                        <h2>Address Information</h2>
                        <div className="form-group">
                            <label>Apartment Number</label>
                            <input
                                type="number"
                                value={aptNum}
                                onChange={(e) => setAptNum(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>House Number</label>
                            <input
                                type="number"
                                value={houseNum}
                                required
                                onChange={(e) => sethouseNum(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Street Name</label>
                            <input
                                type="text"
                                required
                                maxLength={50}
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>City Name</label>
                            <input
                                type="text"
                                required
                                maxLength={40}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Zip Code</label>
                            <input
                                type="number"
                                required
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Location Information Section */}
                    <div className="form-section">
                        <h2>Location Information</h2>
                        <div className="form-group">
                            <label>Country</label>
                            <select
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                            >
                                <option value="">Select a country</option>
                                {countries.map((country) => (
                                    <option key={country.isoCode} value={country.isoCode}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>State Abbreviation</label>
                            <select
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                disabled={!selectedCountry}
                            >
                                <option value="">Select a state</option>
                                {state.map((state) => (
                                    <option key={state.isoCode} value={state.isoCode}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CustomerEntryForm;
