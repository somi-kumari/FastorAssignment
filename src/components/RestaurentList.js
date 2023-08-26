import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RestaurentList() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const restaurentData = [
            {
                id: '1',
                name: 'Bakerss',
                location: 'Hyderabad',
                description: ' We deliver Bakery Items ',

            },
            {
                id: '2',
                name: 'Foodies',
                location: 'Delhi',
                description: ' We deliver veg only',

            },
            {
                id: '3',
                name: ' Kolkata Foods',
                location: 'Kolkata',
                description: ' only Dine In',

            },

        ];

        setTimeout(() => {
            setHotels(restaurentData);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <div style={{ textAlign: "center" }}>Loading...</div>;
    }

    return (
        <div>
            <h1 style={{ marginLeft: "40px" }}>Restaurent List</h1>
            <ul style={styles.list}>
                {hotels.map((hotel) => (
                    <li key={hotel.id}>
                        <div style={styles.card}>
                            <Link to={`/hotel-details/${hotel.id}`}>View Details</Link>
                            <h2 style={{ color: "lightcoral" }}>{hotel.name}</h2>
                            <h6>{hotel.location}</h6>
                            <p style={{ color: "lightgrey" }}>{hotel.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
const styles = {
    list: {
        listStyleType: 'none',
        // padding: 0, 
    },
    card: {
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        maxWidth: '20vw'

    },
};
export default RestaurentList;
