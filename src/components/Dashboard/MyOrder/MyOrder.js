import React, { useEffect, useState } from 'react';
import UserServiceDetails from './UserServiceDetails';

const MyOrder = () =>
{
    const [ orderService, setOrderService ] = useState( [] );
    useEffect( () =>
    {
        fetch( "https://calm-caverns-04841.herokuapp.com/userServices" )
            .then( ( res ) => res.json() )
            .then( ( data ) =>
            {
                setOrderService( data );
            } );
    }, [] );
    return (
        <div className="container mt-5 pt-5">
            <div className="row">

                <div className="col-md-10">
                    <div className="row">
                        { orderService.length ? (
                            orderService.map( ( order ) => (
                                <UserServiceDetails key={ order._id } order={ order } />
                            ) )
                        ) : (
                            <h1 className="text-center text-warning">
                                At This Moments There Is No Services Added!!!
                            </h1>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
