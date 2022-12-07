import React from 'react';
import { logoutThunk } from '../../redux/authReducer';
import { useAppDispatch, useAppSelector } from '../../types';
import Heder from './Heder';

const HederContainer = () =>{
const isAuth = useAppSelector(state => state.auth.isAuth)
const login = useAppSelector(state => state.auth.login)

const dispatch = useAppDispatch()
    const logoutAuth =()=>{
    dispatch(logoutThunk())
    }
    return(
    <Heder isAuth={isAuth} login={login} logoutAuth={logoutAuth} />
    )
}

export default HederContainer;