import React from 'react';
import { Link } from "react-router-dom";

const Items = ( props ) =>
{
    const { id, title, description, img } = props.value;
    return (
        <div className="container col-md-4 gy-3">
            <div className="card" style={ { width: "25rem" } }>
                <img src={ img } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <Link to={ `/bookService/${ id }` } className="btn btn-primary" >Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Items;
