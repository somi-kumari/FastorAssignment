import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function OtpInput() {
    const { otp } = useParams();
    const navigate = useNavigate();
    const [enteredOTP, setEnteredOTP] = useState(['', '', '', '']); // Init with empty values
    const otpInputRefs = [useRef(), useRef(), useRef(), useRef()]; // each input refrence

    const handleInputChange = (index, value) => {
        const newOTP = [...enteredOTP];
        newOTP[index] = value;
        setEnteredOTP(newOTP);

        //  next input box if a digit is entered
        if (value !== '' && index < 3) {
            otpInputRefs[index + 1].current.focus();
        }
    };

    const handleVerify = () => {
        // Combine the entered digits to form the OTP
        const combinedOTP = enteredOTP.join('');
        if (combinedOTP === otp) {
            // Navigate to the restaurent list page after successful verification.
            navigate('/hotel-list');
        } else {
            // Handles incorrect OTP,
            alert('Incorrect OTP. Please try again.');
        }
    };

    return (
        <div>
            <div style={styles.container}>
                <div style={styles.card}>
                    <h1>Enter OTP</h1>
                    <p style={{ color: "lightgrey" }}>Enter the verification code just sent to your email: {otp} </p>
                    <div className="otp-input-container" style={styles.otpInputContainer}>
                        {enteredOTP.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                ref={otpInputRefs[index]}
                                style={styles.otpInput}
                            />
                        ))}
                    </div>
                    <button style={styles.button} onClick={handleVerify}>Verify</button>
                </div>
            </div>
        </div>
    );
}
// customStyles
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    card: {
        padding: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        textAlign: 'center',
        minHeight: '40vh',
    },
    otpInputContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
    otpInput: {
        width: '30px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1.2em',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'salmon',
        color: 'white',
        padding: '10px 20px',
        marginTop: '10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};


export default OtpInput;
