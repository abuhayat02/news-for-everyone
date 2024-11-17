import React, { useContext } from 'react'
import { DataInfo } from './DataProvider'
import { Navigate, useLocation } from 'react-router-dom';

export default function Privet({children}) {
    let myLoc = useLocation()
    console.log(myLoc)
    let { user } = useContext(DataInfo);

    if(user){
        return children
    }else{
        return <Navigate state={myLoc.pathname} to={'/authentications/sign-in'} ></Navigate>
    }

   
}
