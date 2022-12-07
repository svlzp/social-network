
import React, { FC } from "react";
import s from "./users.module.css"
import userPhoto from "../icon/user.png"
import { NavLink } from "react-router-dom";
import Paginator from "./paginator/paginator";
import { filterType, usersType } from "../../types";
import Search from "./ Search/ Search";

type propsUserType={
             addFollow:(userId:number)=>void
             addunFollow:(userId:number)=>void
             users:Array<usersType>   
             toggleFollow:boolean
             totalUcount:number
             pageSize:number
             currentPage:number
             onPageNumber:(numberPage:number)=>void
             onFilter:(filter:filterType)=>void
}

const Users:FC<propsUserType> =(props)=>{

        return(
        <div>
            <Search onFilter={props.onFilter}/> 
            <Paginator totalUcount={props.totalUcount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageNumber={props.onPageNumber}/>
        {
     props.users.map(u=> <div key={u.id}>
       <span>
        <div>
             <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small === null ? userPhoto : u.photos.small } className={s.photo}/>
            </NavLink>
        </div>
        <div>
            {u.followed ? <button disabled={props.toggleFollow}
            onClick={()=> {props.addunFollow(u.id) }}>Follow</button> 
            :<button disabled={props.toggleFollow} onClick={()=> { props.addFollow(u.id)}}>
                Unfollow</button>}   
           
        </div>
       </span>
       <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
       </span>
     </div>
     )
    }
     </div>
     
        )
    }

export default Users;