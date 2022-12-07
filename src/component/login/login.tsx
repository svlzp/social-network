    import React, { FC } from "react";
    import s from './login.module.css'
    import { Formik, Form, Field, ErrorMessage } from 'formik';
    import * as Yup from 'yup' 
import { loginDataType } from "../../types";
    type propsType={
      loginAuth:(values:loginDataType , setStatus:any)=>void
      captcha:{url:string}|null
    }

      const Login:FC<propsType> =(props)=>{
           
        return(
        <div className={s.data}>
            <h1>Login</h1>
            <Formik
          initialValues={{ email: '', password: '',checkbox: false ,captcha:''}}
          validationSchema={Yup.object().shape({
            email: Yup.string()
            .email()
            .required('Required'),
            password: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        })}
          onSubmit={(values:loginDataType, { setSubmitting ,setStatus ,resetForm}) => {    
              props.loginAuth(values ,setStatus);
              
              setSubmitting(false); 
              resetForm(); 
          }}
        > 
          {({ isSubmitting ,status }) => (
            <Form> 
            <div>
            <div className={s.myError}>{status}</div>  
              <Field type="email" name="email" placeholder={"Login"}/>
            </div>  
              <ErrorMessage name="email" component="div" className={s.myError} />
            <div>
              <Field type="password" name="password"  placeholder={"Password"}/>
            </div>
              <ErrorMessage name="password" component="div" className={s.myError}/>
              {!props.captcha ? <></>:<div>
                <div>
                  <img src={props.captcha.url} alt='captcha'/>
                </div>
                <div>
                <Field type="input" name="captcha"/>
                </div>
                 </div>}
              <Field type="checkbox" name="checkbox"/> remember me
              <div>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
              </div>
            </Form>
          )}
        </Formik>
        </div>
        )
    }
    export default Login;