import React, { useContext, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../../App';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';



// Initialize Firebase
initializeApp( firebaseConfig );

const Login = () =>
{
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    // eslint-disable-next-line
    const [ loggedInUser, setLoggedInUser ] = useContext( UserContext );
    const provider = new GoogleAuthProvider();
    const auth = getAuth();


    const googleSignIn = () =>
    {
        signInWithPopup( auth, provider )
            .then( ( result ) =>
            {
                const user = result.user;
                setLoggedInUser( user );
                history.replace( from );
            } ).catch( ( error ) =>
            {
                const errorMessage = error.message;
                console.log( errorMessage );
            } );
    };

    useEffect( () =>
    {
        onAuthStateChanged( auth, ( user ) =>
        {
            if ( user )
            {
                setLoggedInUser( user );
            }
        } );

        // eslint-disable-next-line
    }, [] );

    return (
        <div className="container mt-5 pt-5 ">
            <div className=" m-auto  w-25 ">
                <button onClick={ googleSignIn } type="button" className="btn btn-danger w-100">Login With Google</button>
            </div>
        </div>
    );
};

export default Login;
