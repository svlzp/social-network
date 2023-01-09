        import React, { FC } from 'react';
        import { NavLink } from 'react-router-dom';
        import s from './Dialogs.module.css'
        import { Formik, Form, Field, ErrorMessage, FormikErrors} from 'formik';
        import { DialogsDataType, messageDataType } from '../../redux/messageReducer';
        import { Button, Divider, message, Space, Tabs } from 'antd';
        
        type propsMessageType={
            DialogsData:Array<DialogsDataType>
            messageData:Array<messageDataType>
            addMessage:(values:{text:string})=>void
        }
       
            const Dialogs:FC<propsMessageType> = (props) =>{
              
                const DialogsData = props.DialogsData;
                const messageData = props.messageData;
                const DialogItem = DialogsData.map(log  => 
                    (<div key={log.id}><NavLink to={"/Dialog/" + log.id} className={s.item}>{log.name}</NavLink></div>))  
                const MessageItem = messageData.map(m =>
                    ( <div key={m.id} className={s.dialog}>{m.message}</div> ))    
                    interface FormValues {
                         text:string|null
                      }
                    return (
                        <div className={s.Dialogs}>
                            <div className={s.DialogsItem}>
                            {DialogItem}
                            </div>
                            <div className={s.messages}>
                            {MessageItem}
                            <Formik
                            initialValues={{ text: '' }}
                            validate={values => {
                                let errors:FormikErrors<FormValues> = {};                       
                                if(!values.text){
                                errors.text ='field must not be empty'
                                }
                                else if(values.text.length > 50){
                                    errors.text ='length must not exceed 50 characters'
                                }
                                return errors; 
                            }}
                            
                        onSubmit={(values,{ setSubmitting ,resetForm}) => {
                        props.addMessage(values);
                        setSubmitting(false);
                        resetForm(); }}>  
                    <Form> 
                    <div>    
                        <Field type="text" name="text"
                        placeholder={"new message"} component={"textarea"}/>
                        <ErrorMessage name="text" component="div" className={s.myError} />
                    </div>   
                    <div>
                        <button type="submit" >
                        Send message
                        </button>
                        </div>
                    </Form>
                    </Formik>
                                </div>
                            </div>
                        )
                    }
        export default Dialogs;
