import React, { FC } from 'react';
import s from './Heder.module.css'
import icon from '../icon/icon.png'
import { NavLink } from 'react-router-dom';
type propsHederType={
    isAuth:boolean
    login:string|null
    logoutAuth:()=>void
}

const Heder:FC<propsHederType> = (props) =>{

    return(
        <div className={s.Heder}>
<img src={icon} alt='logo'/>


<div className={s.login}>
   {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
   <div >
   {props.isAuth ? <button onClick={props.logoutAuth} className={s.myButton}>Exit</button> : 
    ''}
   
   </div>
</div>
        </div>
    )
}
export default Heder;