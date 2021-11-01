import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () =>
{

    const {
        reset,
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = ( data ) =>
    {
        const serviceData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            localTime: new Date(),
        };
        reset();

        fetch( "https://calm-caverns-04841.herokuapp.com/addUserContact", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify( serviceData ),
        } )
            .then( ( success ) =>
            {
                if ( success )
                {
                    alert( "Contact Added Successfully!" );
                }
            } );
    };
    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-center">Get Touch</h1>
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <div className="form-group">
                    <label htmlFor="userName">Your Name</label>
                    <input type="text" className="form-control" id="userName"
                        { ...register( "name", { required: true } ) } placeholder="Type Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" className="form-control" { ...register( "email", { required: true } ) } id="email" placeholder="Type Your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Your Phone</label>
                    <input type="number" { ...register( "phone", { required: true } ) } className="form-control" id="phone" placeholder="Type Your Number" />
                </div>

                <button type="submit" className="btn btn-primary my-3 w-100">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
