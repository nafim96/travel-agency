import React from "react";

// this props are dealing from ManageService
const ServiceDetails = ( { order } ) =>
{
    const { name, _id } = order;
    const handleDeleteProduct = ( id ) =>
    {
        fetch( `http://localhost:5000/deleteService/${ id }`, {
            method: "DELETE",
        } )
            .then( ( res ) => res.json() )
            .then( ( result ) =>
            {
                if ( result )
                {
                    alert( "Product Delete Successfully" );
                }
            } )
            .catch( ( error ) =>
            {

            } );
    };
    return (
        <tbody>
            <tr>
                <td>{ name }</td>
                <td>{ _id }</td>
                <td>
                    <button onClick={ () => handleDeleteProduct( _id ) }>delete</button>
                </td>
            </tr>
        </tbody>
    );
};

export default ServiceDetails;