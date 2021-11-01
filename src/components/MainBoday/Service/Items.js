import React from 'react';
import { Link } from "react-router-dom";


const Items = ( { service } ) =>
{

    const { name, description, img, _id, price } = service;

    return (
        <div className="col-md-4 col-ms-12">
            <div class="card text-center my-2">
                <div >
                    <img class="card-img-top w-100 " src={ img } alt="" />
                </div>
                <div class="card-body ">
                    <h3 class="text-center text-danger">{ name }</h3>
                    <h5 class="card-title text-center">{ description }</h5>
                    <h5 class="card-title text-center">$ { price }</h5>
                </div>

                <div className="d-flex justify-content-center">
                    <Link to={ `/bookService/${ _id }` }>
                        <button className="btn-info w-100 p-2 m-3 rounded"  >
                            Book Service
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Items;
