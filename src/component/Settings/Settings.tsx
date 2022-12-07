import React, { ChangeEvent, FC } from "react";
import s from './settings.module.css'
import * as Yup from 'yup' 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactsType, profileSettingsType } from "../../types";


type propsType={
  savePhoto:(files:any)=>void
  updateProfile:(values:profileSettingsType
    )=>void
}
const Settings:FC<propsType> = (props) =>{
const validation = Yup.object({
  fullName: Yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Required'),
  aboutMe: Yup.string()
  .max(50, 'Must be 50 characters or less')
  .required('Required'),
  lookingForAJobDescription: Yup.string()
  .required('Required'),
})
const updatePhoto =(e:any)=>{
    if(e.target.files.length){
 props.savePhoto(e.target.files[0])
    }
}
    return(
        <div>
            <div className={s.ava}>
                <h2>upload photo avtar</h2>
                <input type="file" onChange={updatePhoto}/>   
            </div>
            <div>
            <Formik
          initialValues={{  fullName:'' ,aboutMe:'',lookingForAJob:false, lookingForAJobDescription:'',
          contacts:{
            github:'',vk:'',facebook:'',instagram:'',twitter:'',website:'',youtube:'',mainLink:''
          }}}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting ,resetForm }) => {    
              props.updateProfile(values);
              console.log(values)
              setSubmitting(false); 
              resetForm()  
          }}
        >         
          {({ isSubmitting }) => (
            <Form> 
              <div className={s.form}>
                <h2>Info</h2>
              </div>
            <div className={s.form}>  
            <Field type="text" name="fullName" component={"textarea"} placeholder={"full name"}/>
            <div className={s.myError}><ErrorMessage name="fullName" /></div>
            </div> 
            <div className={s.form}>
            <Field type="text" name="aboutMe" component={"textarea"} placeholder={"about me"}/>
            <div className={s.myError}><ErrorMessage name="aboutMe" /></div>
            </div> 
            <div className={s.form}>
            <Field type="checkbox" name="lookingForAJob"/>looking for a job
            </div>
            <div className={s.form}>
            <Field  type="text" name="lookingForAJobDescription" component={"textarea"} placeholder={"professional skills"}/>
            <div className={s.myError}><ErrorMessage name="lookingForAJobDescription" /></div>
            </div>
          <div className={s.contacts}>
            Contacts
            <div className={s.contacts}>
          <Field type="text" name="contacts.git" component={"textarea"}  placeholder={"git"}/>
           </div>
           <div className={s.contacts}>
          <Field type="text" name="contacts.vk"  component={"textarea"} placeholder={"vk"}/>
           </div>
           <div className={s.contacts}>
          <Field type="text" name="contacts.facebook" component={"textarea"} placeholder={"facebook"}/>
           </div>
           <div className={s.contacts}>
          <Field type="text" name="contacts.instagram" component={"textarea"} placeholder={"instagram"}/>
           </div>
           <div className={s.contacts}>
          <Field type="text" name="contacts.twitter" component={"textarea"} placeholder={"twitter"}/>
           </div>
           <div className={s.contacts}>
          <Field type="text" name="contacts.website" component={"textarea"} placeholder={"website"}/>
           </div>
           <div className={s.contacts}>
          <Field type="text" name="contacts.youtube" component={"textarea"} placeholder={"youtube"}/>
           </div>
           <div className={s.contacts}>
          <Field type="text" name="contacts.mainLink" component={"textarea"} placeholder={"mainLink"}/>
           </div>
          </div>
          
              <div className={s.button}>
              <button type="submit" disabled={isSubmitting} >
                Upload
              </button>
              </div>
            </Form>
          )}
        </Formik>

            </div>
        </div>
    )
}
export default Settings;