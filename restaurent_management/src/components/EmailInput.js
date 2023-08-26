import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmailInput({ history }) {
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const navigate = useNavigate();

    // generates random otp (implementing the extra feature)
    const generateOTP = () => {
        const staticOTP = Math.floor(1000 + Math.random() * 9000);
        setOTP(staticOTP);
        alert(`Verification Code: ${staticOTP}`);
        navigate(`/otp/${staticOTP}`);

    };



    return (

        <div style={styles.container}>
            <div style={styles.card}>
                <h2>Enter your Email Id</h2>
                <p style={{ color: "lightgray" }}>We will send You four digit verification code</p>
                <input
                    type="text"
                    placeholder="Enter your Email "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <button style={styles.button} onClick={generateOTP}>Send Code</button>

            </div>
        </div>

    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center'


    },
    card: {
        padding: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        textAlign: 'center',
        minHeight: '40vh',

    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
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

export default EmailInput;