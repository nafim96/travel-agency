import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddServiceDetails from '../AddServiceDetails/AddServiceDetails';


const AddService = () =>
{
    const { id } = useParams();
    const [ services, setServices ] = useState( [] );
    const singleService = services.filter( dt => dt._id === id );

    useEffect( () =>
    {
        fetch( "https://calm-caverns-04841.herokuapp.com/services" )
            .then( ( res ) => res.json() )
            .then( ( data ) =>
            {
                setServices( data );
            } );
    }, [] );
    return (
        <div>
            <div className="text-center p-3">
                <h1>Discover Our Service</h1>
                <p>Service Categories</p>
                <div className="w-25 m-auto">
                    { services.length === 0 && (
                        <div className="spinner-border text-success" role="status">
                            <span className="sr-only"></span>
                        </div>
                    ) }
                </div>
            </div>
            <div className="container">
                <div className="row">
                    { singleService.map( ( service ) => (
                        <AddServiceDetails
                            key={ service._id }
                            service={ service }
                        ></AddServiceDetails>
                    ) ) }
                </div>
            </div>
        </div>
    );
};

export default AddService;
