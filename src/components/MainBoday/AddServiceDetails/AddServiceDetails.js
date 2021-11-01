import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';

const AddServiceDetails = ( { service } ) =>
{

    const [ loggedInUser ] = useContext( UserContext );
    const { name, description, img, } = service;
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
            ...loggedInUser,
            phone: data.phone,
            address: data.address,
            status: "pending",
            img,
            localTime: new Date(),
        };
        reset();

        fetch( "https://calm-caverns-04841.herokuapp.com/addUserOrder", {
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
                    alert( "Service Added Successfully!" );
                }
            } ).catch( err =>
            {
                console.log( err );
            } );
    };
    return (
        <div className="col-md-4 col-ms-12 mb-5 pb-5">
            <div className="card text-center">
                <div className="container">
                    <img className="card-img-top w-50 m-3" src={ img } alt="" />
                </div>
                <div className="card-body ">
                    <h3 className="text-center text-danger">{ name }</h3>
                    <h5 className="card-title text-center">{ description }</h5>
                </div>


            </div>
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
                            defaultValue={ name }
                            placeholder="Enter Product Name"
                            { ...register( "name", { required: true } ) }
                        />
                    </div>
                    <div className="form-group">
                        <label for="userName">User Name</label>
                        { errors.userName && (
                            <span className="text-danger">This field is required*</span>
                        ) }{ " " }
                        <br />
                        <input
                            className="form-control"
                            id="userName"
                            { ...register( "userName", { required: true } ) }
                            cols="30"
                            rows="5"
                            defaultValue={ loggedInUser.displayName }
                        ></input>
                    </div>
                    <div className="form-group">
                        <label for="email">Paste Your Picture Link</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            defaultValue={ loggedInUser.email }
                            { ...register( "email", { required: true } ) }
                        />
                    </div>
                    <div className="form-group">
                        <label for="phone">Your Phone</label>
                        <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Enter Your Phone"
                            { ...register( "phone", { required: true } ) }
                        />
                    </div>
                    <div className="form-group">
                        <label for="address">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Enter Your Address"
                            { ...register( "address", { required: true } ) }
                        />
                    </div>

                    <div className="d-flex justify-content-between p-3">
                        <button className="btn-success" >
                            Submit
                        </button>
                        <Link to="/">
                            <button className="btn-success" >
                                Cancel Service
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServiceDetails;
