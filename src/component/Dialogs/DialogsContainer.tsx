    import React from "react";
    import Dialogs from "./Dialogs";
    import {  MessageAction} from '../../redux/messageReducer';
    import { Navigate } from "react-router-dom";
    import { useAppDispatch, useAppSelector } from "../../types";
    const DialogContainer = () =>{
        const DialogsData = useAppSelector(state => state.MessagePage.DialogsData);
        const messageData = useAppSelector(state => state.MessagePage.messageData);
        const isAuth = useAppSelector(state=>state.auth.isAuth);
        const dispatch = useAppDispatch();

        const addMessage =(values:{text:string})=>{  
          
                dispatch(MessageAction(values.text));
            }
        
            if(!isAuth)return<Navigate to='/login'/>
        return (
            <Dialogs 
            addMessage={addMessage} DialogsData={DialogsData}  messageData={messageData}/>
        )
    }
    export default DialogContainer;