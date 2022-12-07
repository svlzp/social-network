import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { photoThunk, profileThunk, updateProfileThunk } from "../../redux/profileReducer";
import { profileSettingsType, useAppDispatch, useAppSelector } from "../../types";
import Settings from "./Settings";





const SettingsContainer =()=>{
const isAuth = useAppSelector(state=>state.auth.isAuth);
const profile = useAppSelector(state => state.ProfilePage.profile);
let id:any = useAppSelector(state=>state.auth.id)
const dispatch = useAppDispatch()
useEffect(()=>{
    dispatch(profileThunk(id)) 
},[])

const savePhoto=(photoFile:any)=>{
dispatch(photoThunk(photoFile))
}
const updateProfile =(profile:profileSettingsType)=>{
    dispatch(updateProfileThunk(profile))
}
if(!isAuth)return<Navigate to='/login'/>

return<Settings savePhoto={savePhoto}  updateProfile={updateProfile}/>

}



export default SettingsContainer;