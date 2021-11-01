import React, { useEffect, useState } from 'react';
import Items from './Items';



const Service = () =>
{
    const [ services, setServices ] = useState( [] );

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
                    { services.map( ( service ) => (
                        <Items
                            key={ service._id }
                            service={ service }
                        ></Items>
                    ) ) }
                </div>
            </div>
        </div>
    );
};

export default Service;
