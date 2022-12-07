import React, { FC } from "react";
import { useState } from "react";
import s from './status.module.css'


type propsType={
    status:string
    updateStatus:(userStatus:string)=>void
}


const Status:FC<propsType> =(props)=>{ 
const[editMode ,setEditMode] = useState(false)
const[userStatus,setUserStatus]=useState(props.status)

  const onStatus:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    setUserStatus(e.target.value)
   }
   const onUpdateStatus=()=>{
    setEditMode(false)
    props.updateStatus(userStatus)
}

return(
    <div>
        {!editMode ? 
        <div>
            <span onDoubleClick={()=>{setEditMode(true)}} className={s.span}>{props.status}</span>
        </div>:
        <div>
            <input autoFocus={true} onBlur={()=>{onUpdateStatus()}}
             onChange={onStatus} value = {userStatus}/>
        </div>
}
    </div>
  
)


}



export default Status;