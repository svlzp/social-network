import React, { FC } from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'
import { postsType } from "../../../types";
import { Formik, Form, Field, ErrorMessage, FormikErrors} from 'formik';
type propsType={
  posts:Array<postsType>
  addPost:(values:{text:string})=>void
  deletePost:(id:number)=>void
}
const MyPost:FC<propsType> = (props) =>{
  const posts = props.posts;
  const postData = posts.map(p => <Post key={p.id} message={p.message}
     likesCount={<button onClick={()=>alert("like")}>{p.likesCount}</button>}
      delete={<button onClick={()=>props.deletePost(p.id)}>delete</button>}/> )
 
  interface FormValues {
    text:string|null
  }
    return(
        <div>
        <h2>My post</h2>
          <div>
          <Formik
                            initialValues={{ text: '' }}
                            validate={values => {
                                let errors:FormikErrors<FormValues> = {};                       
                                if(!values.text){
                                errors.text ='field must not be empty'
                                }
                                else if(values.text.length > 100){
                                    errors.text ='length must not exceed 100 characters'
                                }
                                return errors; 
                            }}
                            
                        onSubmit={(values,{ setSubmitting ,resetForm}) => {
                        props.addPost(values);
                        setSubmitting(false);
                        resetForm(); }}>  
                    <Form> 
                    <div>    
                        <Field type="text" name="text"
                        placeholder={"new posts"} component={"textarea"}/>
                        <ErrorMessage name="text" component="div" className={s.myError} />
                    </div>   
                    <div>
                        <button type="submit" >
                        Send posts
                        </button>
                        </div>
                    </Form>
                    </Formik>
         
         </div>
          <div className={s.post}>
          {postData}
         
          </div>
        
        </div> 
    )
}
export default MyPost;