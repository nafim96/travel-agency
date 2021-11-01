import React from "react";


const ManageServiceDetails = ( { order } ) =>
{
    const { name, email, orderTime, _id, status } = order;

    const handleStatus = ( value, id ) =>
    {
        fetch( `https://calm-caverns-04841.herokuapp.com/updateStatus/${ id }`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify( { value } ),
        } )
            .then( ( res ) => res.json() )
            .then( ( data ) =>
            {
                if ( data )
                {
                    alert( "Status updated Check Service List" );
                }
            } )
            .catch( ( error ) =>
            {
                console.log( error );
            } );
    };



    const handleDeleteOrder = ( id ) =>
    {
        fetch( `https://calm-caverns-04841.herokuapp.com/deleteOrder/${ id }`, {
            method: "DELETE",
        } ).then( res => res.json() )
            .then( ( result ) =>
            {
                if ( result )
                {
                    alert( "Service Delete Successfully" );
                }
            } )
            .catch( ( error ) =>
            {
                console.log( error );
            } );
    };
    return (

        <tbody>
            <tr>
                <td>{ name }</td>
                <td>{ orderTime }</td>
                <td>{ email }</td>
                <td>{ status }</td>
                <td>
                    <button
                        onClick={ () => handleStatus( "Pending", _id ) }
                        className="btn-danger border-0 rounded"
                    >
                        Pending
                    </button>
                    <button
                        onClick={ () => handleStatus( "Approve", _id ) }
                        className="btn-success border-0 rounded m-1"
                    >
                        Approve
                    </button>
                </td>
                <td>
                    <button onClick={ () => handleDeleteOrder( _id ) } className="btn btn-danger">
                        Delete
                    </button>
                </td>

            </tr>
        </tbody>
    );
};

export default ManageServiceDetails;
