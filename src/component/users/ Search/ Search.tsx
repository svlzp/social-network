import React, { FC } from "react";
import * as Yup from 'yup' 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './search.module.css'
import { filterType } from "../../../types";
 
type propsType={
    onFilter:(filter:filterType)=>void
 }

const Search:FC<propsType> =(props)=>{
const validation = Yup.object({
    term: Yup.string()
    .max(15, 'Must be 15 characters or less'),    
})
    return(
        <div>
              <Formik
          initialValues={{term:'' , friend:null }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting ,resetForm }) => {    
              props.onFilter(values);
              console.log(values)
              setSubmitting(false); 
              resetForm()  
          }}>        
          {({ isSubmitting }) => (
            <Form> 
            <Field type="text" name="term" component={"input"} placeholder={"input"}/>
            <div className={s.myError}><ErrorMessage name="term" /></div> 
            <Field  name="friend" as="select">  
                  <option value="null">ALL</option> 
                  <option value="true">Only followed</option> 
                  <option value="false">Only unfollowed</option> 
            </Field>
            <button type="submit" disabled={isSubmitting}>Search</button>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Search