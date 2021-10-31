import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Order.css';

const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth;
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <h2>Please Add Details to Book Your Room</h2>
            <form className="placeorder-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Full Name" defaultValue="" {...register("name")} />
                <br />
                <br />
                <input placeholder="Email Address" {...register("email", { required: true })} />

                {errors.email && <span className="bg-danger text-white">This field is required</span>}
                <br />
                <br />
                <input placeholder="Address" defaultValue="" {...register("Address")} />
                <br />
                <br />
                <input placeholder="City" defaultValue="" {...register("City")} />
                <br />
                <br />
                <input placeholder="Zip Code" defaultValue="" {...register("Zip Code")} />
                <br />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;