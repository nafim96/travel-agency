import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../Authentication/Login/firebase.config';



// Initialize Firebase
initializeApp( firebaseConfig );


const Navbar = () =>
{

    const [ loggedInUser, setLoggedInUser ] = useContext( UserContext );

    const handleSignOut = () =>
    {
        const auth = getAuth();
        signOut( auth ).then( () =>
        {
            setLoggedInUser( {} );
        } ).catch( ( error ) =>
        {
            console.log( error );
        } );
    };
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">Book Travel</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {
                            loggedInUser.email && <button onClick={ handleSignOut } className="btn btn-outline-success btn-small mx-2  text-white"><Link style={ { textDecoration: "none", color: "white" } } to="/login">Logout</Link></button>

                        }
                        {
                            loggedInUser.email && <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    { loggedInUser.displayName }
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item" to="/addService">Add Service</Link></li>
                                    <li><Link className="dropdown-item" to="/myOrder">My Order</Link></li>
                                    <li><Link className="dropdown-item" to="/manageOrder">Manage Order</Link></li>
                                    <li><Link className="dropdown-item" to="/manageService">Manage Service</Link></li>
                                </ul>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
