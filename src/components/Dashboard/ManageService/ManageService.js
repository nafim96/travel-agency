import React, { useEffect, useState } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const ManageService = () =>
{
    const [ manage, setManage ] = useState( [] );
    const url = `http://localhost:5000/services`;
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
        <div className="container pb-5 mt-5">
            <div className="row">
                <div className="col-md-10">
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Service</th>
                                <th scope="col">Service Id</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        { manage.map( ( order ) => (
                            <ServiceDetails key={ order._id } order={ order } />
                        ) ) }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;
