import React from 'react';
import { data } from '../../../App';
import { useParams, Link } from 'react-router-dom';



const AddService = () =>
{
    const { id } = useParams();
    const queryData = data.filter( dt => dt.id === id );
    const { img, title, description } = queryData[ 0 ];

    return (
        <div className="container col-md-4 mt-5 pt-5 mb-5 pb-5">
            <div className="card" style={ { width: "25rem" } }>
                <img src={ img } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to={ `/bookService/${ id }` } className="btn btn-primary" >Book Now</Link>
                        </div>
                        <div>
                            <Link to='/' className="btn btn-primary" >Cancel</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;
