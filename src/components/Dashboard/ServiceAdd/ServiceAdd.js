import React from 'react';
import { useForm } from 'react-hook-form';

const ServiceAdd = () =>
{
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = ( data ) =>
    {
        const serviceData = {
            name: data.name,
            description: data.description,
            img: data.imageLink,
            price: data.price,
            localTime: new Date(),
        };
        reset();

        fetch( "https://calm-caverns-04841.herokuapp.com/addService", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify( serviceData ),
        } )
            .then( ( res ) => res.json() )
            .then( ( success ) =>
            {
                if ( success )
                {
                    alert( "Service Added Successfully!" );
                }
            } );
    };

    return (
        <div className="container pt-5 mt-5 row">
            <div className="col-md-2">
            </div>
            <div className="container col-md-10">
                <div className="container">
                    <div>
                        <form onSubmit={ handleSubmit( onSubmit ) }>
                            <div className="form-group">
                                <label for="name">Service Name</label>
                                { errors.name && (
                                    <span className="text-danger">This field is required</span>
                                ) }{ " " }
                                <br />
                                <input

                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Product Name"
                                    { ...register( "name", { required: true } ) }
                                />
                            </div>
                            <div className="form-group">
                                <label for="description">Description</label>
                                { errors.description && (
                                    <span className="text-danger">This field is required*</span>
                                ) }{ " " }
                                <br />
                                <textarea
                                    className="form-control"
                                    id="description"
                                    { ...register( "description", { required: true } ) }
                                    cols="30"
                                    rows="5"
                                    placeholder="Description"
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label for="chocolate">Paste Your Picture Link</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="chocolate"
                                    placeholder="Paste Image Link"
                                    { ...register( "imageLink", { required: true } ) }
                                />
                            </div>
                            <div className="form-group">
                                <label for="price">Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    placeholder="Service Price"
                                    { ...register( "price", { required: true } ) }
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAdd;
