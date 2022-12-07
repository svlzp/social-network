
import React, { FC } from "react";
import s from './Post.module.css'
 
type propsType={
  message:string
  likesCount:any
  delete:any
}

const Post:FC<propsType> =(props) =>{
const url ="http://www.2queens.ru/Uploads/Alice%20in%20Wonderland/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9%20%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80.jpg"


return(
        
        <div className={s.Post}>
            <img src={url} alt=''/>
          {props.message}
        <div><span>like{props.likesCount}</span>{props.delete}</div> 
        </div>
       
   
    )
}
export default Post;