import React, { FC } from "react";
import { contactsType, photosType } from "../../../types";
import s from './Profileinfo.module.css'
import Status from "./status/status";

type propsType={
        updateStatus:(userStatus:string)=>void
        userStatus:string
        photos:photosType
        fullName:string
        aboutMe:string
        lookingForAJob:boolean
        lookingForAJobDescription:string
        contacts:contactsType 
}

const ProfileInfo:FC<propsType> =(props)=>{
const ava:string ='http://www.2queens.ru/Uploads/Alice%20in%20Wonderland/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9%20%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80.jpg'
const url:string ='https://media.istockphoto.com/photos/businessman-standing-on-the-top-of-rock-picture-id1366352000?b=1&k=20&m=1366352000&s=170667a&w=0&h=Jq1D4K4I0yDJ09kq8Q5fVl40YnstFd_RMI4Pyou0v3E='
    return(
 <div> 
     <div className={s.pictures}>
    <img src={url} alt='img'/>
    </div>
    <Status status={props.userStatus} updateStatus={props.updateStatus}/>
    <div className={s.ProfileInfo}>
    <div className={s.ava}>
    <img src={props.photos.large === null ? ava : props.photos.large} alt='ava'/>
    </div>
    <div className={s.info}>
    <h4>Name: {props.fullName}</h4> 
    <h5>aboutMe: {props.aboutMe} </h5>
    <h5>looking for a job:{!props.lookingForAJob? "no":<div>Yes: {props.lookingForAJobDescription}</div>}</h5>
    </div>
    </div>
   
   
</div>
    )
}
export default ProfileInfo;