import React, { useEffect, useState } from 'react';
import ManageServiceDetails from '../ManageServiceDetails/ManageServiceDetails';

const ManageProduct = () =>
{
    const [ manage, setManage ] = useState( [] );
    const url = `https://calm-caverns-04841.herokuapp.com/userServices`;
    useEffect( () =>
    {
        fetch( url )
            .then( ( res ) => res.json() )
            .then( ( data ) =>
            {
                setManage( data );
            } );
        // eslint-disable-next-line
    }, [ manage ] );
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Ordered Service</th>
                                <th scope="col">Order Time</th>
                                <th scope="col">Email</th>
                                <th scope="col">Current Status</th>
                                <th scope="col">Change Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        { manage.map( ( order ) => (
                            <ManageServiceDetails key={ order._id } order={ order } />
                        ) ) }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
