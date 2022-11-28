import Lottie  from 'lottie-react';
import buffer from '../../assets/animations/buffer.json';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/auth.context';

const PrivateRoute = ({children}) => {

    const { user , load } = useContext(AuthContext); 
    const location = useLocation();


    if(load){
        return   <div className='d-flex align-items-center justify-content-center'><Lottie animationData={buffer}></Lottie></div>
    }


    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

    return  children ;
};

export default PrivateRoute;