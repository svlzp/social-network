import React from 'react';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { profileThunk, statusThunk, updateStatusThunk } from '../../redux/profileReducer';
import { profileType, useAppDispatch, useAppSelector } from '../../types';
import Profile from './Profile';

const ProfileContainer =()=>{
const profile:any = useAppSelector(state => state.ProfilePage.profile);
let isAuth = useAppSelector(state=>state.auth.isAuth);
let userStatus =useAppSelector(state=>state.ProfilePage.userStatus);
let id = useAppSelector(state=>state.auth.id)
let {userId} = useParams() as any
const dispatch = useAppDispatch()

if(!userId){
 userId = id
}


useEffect(()=>{
    dispatch(profileThunk(userId))
},[userId])
useEffect(()=>{
    dispatch(statusThunk(userId))
},[userId])
const updateStatus=(status:string)=>{
        dispatch(updateStatusThunk(status))

}
if(!isAuth)return<Navigate to='/login'/>
    return <Profile 
    profile={profile} 
    updateStatus={updateStatus} 
    userStatus={userStatus}/>
        
        
    
}
export default ProfileContainer;