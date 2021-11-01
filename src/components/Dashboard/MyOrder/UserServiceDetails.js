import React from 'react';

const UserServiceDetails = ( { order } ) =>
{
    const { img, name, description, status } = order;
    const statusStyle = {
        fontWeight: "bold",
        borderRadius: "10px",
    };
    return (
        <div className="col-md-4 col-ms-12">
            <div className="card text-center">
                <div className="container">
                    <img className="card-img-top w-50 m-3" src={ img } alt="" />
                    <button style={ statusStyle } className="p-2 btn-info  border-0 ">
                        <span className={ `${ status.value === "pending " ? "text-danger" : "text-success" }` }>{ status }</span>
                    </button>
                </div>
                <div className="card-body ">
                    <h3 className="text-center text-danger">{ name }</h3>
                    <h5 className="card-title text-center">{ description }</h5>
                </div>
            </div>
        </div>
    );
};

export default UserServiceDetails;
