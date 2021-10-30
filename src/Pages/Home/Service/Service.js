import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, Roomname, Price, description, picture } = service;
    return (
        <div className="service pb-3">
            <img src={picture} alt="" />
            <h3>Name: {Roomname}</h3>
            <h5>Price: ${Price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {Roomname.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;