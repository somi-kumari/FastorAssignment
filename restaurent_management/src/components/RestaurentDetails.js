import React from 'react';
import { useParams } from 'react-router-dom';

function RestaurentDetails() {

    let { hotelId } = useParams();




    return (
        <div>
            <h2>Restaurant Details</h2>
            <p>Restaurant ID: {hotelId}</p>



        </div>
    );
}

export default RestaurentDetails;
