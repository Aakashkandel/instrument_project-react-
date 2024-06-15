import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UserRouter(props) {
    const navigate = useNavigate();
    const { Component } = props;
    let { name } = useParams();
    const stateData = useSelector(state => state.authenticate);
    const stateid = stateData.userInfo.name;
    const isLoggedin = stateData.isLoggedin;

    const token=localStorage.getItem('token');
  
   

    useEffect(() => {
        if (stateid !== name ) {
          
        }
        if(isLoggedin == false && !token)
            {
                navigate('/login');
            }

    })
    return (
        <div>
            <Component />
        </div>
    )
}

