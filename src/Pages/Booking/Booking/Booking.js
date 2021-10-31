import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Distance from '../../Home/Distance/Distance';
import PlaceOrder from '../../PlaceOrder/PlaceOrder';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://roomserver2.herokuapp.com/products/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));

    }, [])


    return (
        <div>
            <h2>Details of: {service.Roomname}</h2>

            <h2>this is booking: {serviceId}</h2>

            <br />
            <br />
            <Distance></Distance>
            <br />
            <PlaceOrder></PlaceOrder>
        </div>


    );
};

export default Booking;