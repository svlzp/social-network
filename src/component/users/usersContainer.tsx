import React from "react";
import { followThunk, getUsersThunk, setPageAction, toggleFollowAction, unFollowThunk} from "../../redux/userReducer";
import Users from "./users";
import Preloader from "../preloader/preloader";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { filterType, useAppDispatch, useAppSelector } from "../../types";



const UsersContainer =()=>{
let users = useAppSelector(state=> state.UsersPage.users);
let pageSize = useAppSelector(state=> state.UsersPage.pageSize);
let totalUcount = useAppSelector(state=> state.UsersPage.totalUcount);
let currentPage = useAppSelector(state=> state.UsersPage.currentPage);
let isFetching = useAppSelector (state=> state.UsersPage.isFetching);
let toggleFollow =useAppSelector(state=> state.UsersPage.toggleFollow);
let filter =useAppSelector(state=> state.UsersPage.filter);
let isAuth = useAppSelector (state=>state.auth.isAuth)
let dispatch = useAppDispatch();

const addFollow =(userid:number)=>{
    dispatch(followThunk(userid))
}
const addunFollow = (userid:number)=>{ 
dispatch(unFollowThunk(userid))
}
const setPage =(pageNumber:number)=>{
    dispatch(setPageAction(pageNumber))
}

useEffect(()=>{
    dispatch(getUsersThunk(currentPage ,pageSize,filter))},[])

    const onFilter =(filter:filterType)=>{
        dispatch(getUsersThunk(currentPage ,pageSize, filter))

    }
    
let onPageNumber = (pageNumber:number) =>{
    setPage(pageNumber)
    dispatch(getUsersThunk( pageNumber,pageSize,filter))
}
if(!isAuth)return<Navigate to='/login'/> 
    return (<>
        {isFetching ? <Preloader/> : null}
        <Users addFollow={addFollow}
             addunFollow={addunFollow} 
             users={users}
             pageSize={pageSize}
             totalUcount={totalUcount}
             currentPage={currentPage}
             onPageNumber={onPageNumber}
             toggleFollow={toggleFollow}
             onFilter={onFilter}/>
      </>
    )
}
export default UsersContainer;