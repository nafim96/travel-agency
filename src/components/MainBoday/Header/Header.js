import React from 'react';
import img1 from "./image/travel1.jpg";
import img2 from "./image/travel2.jpg";
import img3 from "./image/travel3.jpg";


const Header = () =>
{

    return (
        <div id="carouselExampleControls" className="carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ img1 } className="img-fluid d-block w-100 h-75" alt="carousel" />
                </div>
                <div className="carousel-item">
                    <img src={ img2 } className=" img-fluid d-block w-100 h-75" alt="carousel" />
                </div>
                <div className="carousel-item">
                    <img src={ img3 } className=" img-fluid d-block w-100 h-75" alt="carousel" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Header;
