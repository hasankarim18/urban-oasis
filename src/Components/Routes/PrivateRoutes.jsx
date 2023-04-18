import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Spinner from '../utilities/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    const notify = ()=> toast('You need to login to visit this page.')

    if(loading){
        return <Spinner />
    }else if(user && !loading){
        
        return children
    }else {
        notify();
        return <Navigate to="/login" state={{from:location}} replace />
    }

   
};

export default PrivateRoutes;