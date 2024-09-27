import React from 'react';
import './payment.css'; // Assuming you create a separate CSS file for styles

const PaymentDetails = () => {
    return (
        <div className="payment-wrapper"> {/* Updated class for full-page image wrapper */}
            <div className="header">DREAM TOURS</div>
            <div className="form-container">
                <h2>Enter your payment details</h2>
                <form>
                    <input type="text" placeholder="Card Number" required />
                    <input type="text" placeholder="MM/YYYY CVC" required />
                    <input type="text" placeholder="Street Address" required />
                    <input type="text" placeholder="Apt/Unit, Suite etc" required />
                    <select required>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                    </select>
                    <select required>
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                    <input type="text" placeholder="City" required />
                    <input type="text" placeholder="Zip Code" required />
                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentDetails;
