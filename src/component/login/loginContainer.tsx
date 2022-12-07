    import React from "react";
    import { logoinThunk } from "../../redux/authReducer";
    import { Navigate } from "react-router-dom";
    import Login from "./login";
import { loginDataType, useAppDispatch, useAppSelector } from "../../types";


      const LoginContainer =()=>{
      const isAuth = useAppSelector(state=>state.auth.isAuth)
      const captcha = useAppSelector(state=>state.auth.captcha)
      const dispatch = useAppDispatch()
      const loginAuth=(value:loginDataType ,setStatus:any)=>{
        dispatch(logoinThunk(value ,setStatus))
      }

    if(isAuth === true)return<Navigate to='/profile'/>
        return<Login loginAuth={loginAuth} captcha={captcha}/>
        
        
    }
    export default LoginContainer;