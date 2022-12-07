import React, { FC } from 'react';
import MyPostContainer from './myPost/MyPostContainer';
import Preloader from "../preloader/preloader";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { profileType } from '../../types';
type propsType={
    updateStatus:(userStatus:string)=>void
    userStatus:string
    profile:profileType
}

const Profile:FC<propsType> =(props)=>{
    if (!props.profile){
        return<Preloader/>
    }
let photos = props.profile.photos;
let fullName = props.profile.fullName;
let aboutMe = props.profile.aboutMe;
let lookingForAJob =props.profile.lookingForAJob;
let lookingForAJobDescription = props.profile.lookingForAJobDescription
let contacts = props.profile.contacts
 
    return (<div>
        <ProfileInfo
        updateStatus={props.updateStatus}
        userStatus={props.userStatus}
        photos={photos}
        fullName={fullName}
        aboutMe={aboutMe}
        lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
        contacts = {contacts}/>
        <MyPostContainer/>
        </div>
    )
}
export default Profile;