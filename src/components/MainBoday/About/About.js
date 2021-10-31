import React from 'react';
import img1 from '../Header/image/travel4.jpg';

const About = () =>
{
    return (
        <div className="container mb-5 mt-5">
            <h1 className="text-center m-5">ABOUT US</h1>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam neque porro adipisci perferendis provident aperiam non nobis dolore possimus cum aut enim amet rerum, officia laboriosam temporibus tenetur, voluptatum praesentium debitis molestias placeat! Exercitationem ea similique corrupti sit! Omnis in doloremque maiores?
                </div>
                <div className="col-md-6">
                    <img src={ img1 } className=" img-fluid d-block w-100" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
