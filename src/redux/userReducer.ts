import { ThunkAction } from "redux-thunk";
import { resultCodes, userApi } from "../component/api/api";
import { filterType, usersDataType, usersType } from "../types";
import { RootState } from "./store";


const FOLLOW ='FOLLOW';
const UNFOLLOW ='UN-FOLLOW';
const SETUSER ='SET-USERS';
const SETPAGE ='SET-PAGE'
const TOGGLE_FETCHING ='TOGGLE-FETCHING'
const TOGGLE_FOLLOW ='TOGGLE-FOLLOW'
const FILTER = 'FILTER'

type initialStateType={
  users: Array<usersType>
  pageSize: number
  totalUcount: number
  currentPage: number
  isFetching: boolean
  toggleFollow: boolean
  totalCount:number
  filter:filterType
}
type ActionType = UserFollowActionType|UserUNFollowActionType|UserActionType|
setPageActionType|toggleActionType|toggleFollowActionType|filterActionType

let initialState={
  users:[] as Array<usersType>,
  pageSize: 10,
  totalUcount: 152,
  currentPage: 1,
  isFetching: false,
  toggleFollow: false,
  totalCount:1,
  filter:{
    term:'',
    friend:null as null|boolean
  }

}
  const UserReducer = (state = initialState, action:ActionType):initialStateType=>{
switch(action.type){

 case FOLLOW:
   return{ ...state,
     users: state.users.map(u=>{
      if (u.id === action.userid){
        return{ ...u, followed : true }
      }
      return u;
    })
    
  }
  
  case UNFOLLOW:
   return{...state,
     users: state.users.map(u=>{ 
      if (u.id === action.userid){
        return{ ...u, followed: false }
      }
      return u;
    })
  }
  case SETUSER:{
   
    return{...state , 
      users : action.data.items ,
      totalUcount: action.data.totalCount}
  }
  case SETPAGE :{
    return{...state , currentPage : action.pageNumber}
   
  }
  case TOGGLE_FETCHING:{
    return{...state , isFetching : action.isFetching}
  }
  case TOGGLE_FOLLOW:{
    return{...state , toggleFollow : action.toggleFollow}
  }
  case FILTER:{
    return{...state , filter: action.filter}
  }
  
  default:
 return state
 }


}
type UserFollowActionType={
  type: typeof FOLLOW
  userid:number
}
export const UserFollowAction =(userid:number):UserFollowActionType=>{
    return{type: FOLLOW ,userid}
}
type UserUNFollowActionType={
  type: typeof UNFOLLOW
  userid:number
}
export const UserUNFollowAction =(userid:number):UserUNFollowActionType=>{
    return{type: UNFOLLOW , userid}
}
type UserActionType={
  type: typeof SETUSER
  data:usersDataType
}
export const UserAction =(data:usersDataType ):UserActionType=>{
   return{type: SETUSER , data }
}
type setPageActionType={
  type: typeof SETPAGE
  pageNumber:number
}
export const setPageAction =(pageNumber:number):setPageActionType=>{
  return{type: SETPAGE ,pageNumber }
}
type toggleActionType={
  type: typeof TOGGLE_FETCHING
  isFetching:boolean
}
export const toggleAction =(isFetching:boolean):toggleActionType=>{
  return{type: TOGGLE_FETCHING,isFetching }
}
type toggleFollowActionType={
  type: typeof TOGGLE_FOLLOW
  toggleFollow:boolean
}
export const toggleFollowAction =(toggleFollow:boolean):toggleFollowActionType=>{
  return{type: TOGGLE_FOLLOW ,toggleFollow}
}
type filterActionType={
  type: typeof FILTER
  filter:filterType
}
export const filterAction =(filter:filterType):filterActionType=>{
  return{type: FILTER,filter }
}
type ThunkType = ThunkAction<Promise<void>,RootState , unknown ,ActionType>

export const getUsersThunk = (currentPage:number,pageSize:number ,filter:filterType):ThunkType=>async(dispatch ,getState)=>{
  dispatch(toggleAction(true))
  dispatch(filterAction(filter))
  let response = await userApi.getUsers(currentPage , pageSize ,filter)
  dispatch(toggleAction(false));
  dispatch(UserAction(response.data)); }


export const followThunk = (userid:number):ThunkType=>async(dispatch)=>{
    dispatch(toggleFollowAction(true))
    let data = await userApi.followUsers(userid)
    if(data.resultCode === resultCodes.Success){
        dispatch(UserFollowAction(userid))
    }
    dispatch(toggleFollowAction(false))
  }
export const unFollowThunk = (userid:number):ThunkType=>async(dispatch)=>{
    dispatch(toggleFollowAction(true))
    let data = await userApi.UnFollowUsers(userid)
    if(data.resultCode === resultCodes.Success){
       dispatch(UserUNFollowAction(userid) )
    }
  dispatch(toggleFollowAction(false))
}
  export default UserReducer;