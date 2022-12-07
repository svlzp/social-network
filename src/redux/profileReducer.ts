
import { ThunkAction } from "redux-thunk";
import { profileApi, resultCodes, userApi } from "../component/api/api";
import { postsType, profileSettingsType, profileType } from "../types";
import { RootState } from "./store";

const ADD_POST ='ADD-POST';
const UPDATE_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET-USER-PROFILE'
const SET_USER_STATUS ='SET-USER-STATUS'
const UPLOAD_PHOTO ='UPLOAD-PHOTO'
const DELETE_POST='DELETE_POST'

type initialStateType={
  posts:Array<postsType>
  profile:profileType | null
  userStatus:string
}
type ActionType = TextActionType|PostActionType|setProfileActionType|statusActionType|
deletePostActionType|photoActionType

let initialState ={ 
  posts:[
  {id: 1 , message: 'hi , how are you?' , likesCount: 98 },
  {id: 2 , message: 'my first post ', likesCount: 45},
  {id: 3 , message: 'bla bla bla text', likesCount: 3}
] as Array<postsType>,
  profile: null as profileType|null,
  userStatus: '',
}
const ProfileReducer = (state = initialState , action:ActionType):initialStateType =>{
 
     switch(action.type)  {   
      case ADD_POST: {
        let a = Math.random()
        let Post ={
            id: a,
            message: action.value.text,
            likesCount: 0
            };
            let stateCopy ={...state};
            stateCopy.posts =[...state.posts];
            stateCopy.posts.push(Post)
        return stateCopy ;
          }
     
      case SET_USER_PROFILE:{
        return{...state, profile: action.profile }
      }
      case SET_USER_STATUS:{
        if(action.userStatus === null){
          return {...state,userStatus:'No Status'}
        }
        return{...state, userStatus: action.userStatus }
      }
      case DELETE_POST:
        return{...state, posts: state.posts.filter(p=>p.id != action.postId)}
      case UPLOAD_PHOTO:
        return{...state, profile : {...state.profile,photos: action.photos} as profileType}
      default:
        return state ;

        }
}
type TextActionType ={
  type: typeof UPDATE_TEXT
  text:string
}
export const TextAction=(text:string):TextActionType=>{
    return {type: UPDATE_TEXT , text};
}
type PostActionType ={
  type: typeof ADD_POST
  value:{text:string}
}
export const PostAction =(value:{text:string}):PostActionType=>{
    return {type: ADD_POST,value}
}
type setProfileActionType ={
  type: typeof SET_USER_PROFILE
  profile:profileType
}
export const setProfileAction=(profile:profileType):setProfileActionType=>{
  return {type: SET_USER_PROFILE , profile};
}
type statusActionType ={
  type: typeof SET_USER_STATUS
  userStatus:string
}
export const statusAction=(userStatus:string):statusActionType=>{
  return {type: SET_USER_STATUS , userStatus};
}
type deletePostActionType ={
  type: typeof DELETE_POST
  postId:number
}
export const deletePostAction=(postId:number):deletePostActionType=>{
 
  return {type: DELETE_POST , postId};
}
type photoActionType ={
  type: typeof UPLOAD_PHOTO
  photos:any
}
export const photoAction=(photos:postsType):photoActionType=>{

  return {type: UPLOAD_PHOTO , photos};
}
type ThunkType = ThunkAction<Promise<void>,RootState , unknown ,ActionType>


        export const profileThunk = (userId:number):ThunkType=> async(dispatch)=>{ 
        let data = await userApi.getProfile(userId)
        dispatch(setProfileAction(data))
        }
        export const statusThunk = (userId:number):ThunkType=>async(dispatch)=>{      
        let userStatus= await profileApi.statusGet(userId)
        dispatch(statusAction(userStatus))  
        }
        export const updateStatusThunk = (userStatus:string):ThunkType=> async(dispatch)=>{ 
        let response = await profileApi.statusUpdate(userStatus) 
        if(response.data.resultCode === resultCodes.Success){
        dispatch(statusAction(userStatus)); 
        }
        }
        export const photoThunk = (photoFile:any):ThunkType=>async(dispatch)=>{     
        let response = await profileApi.photoUpdate(photoFile)
        if(response.data.resultCode === resultCodes.Success){
        dispatch(photoAction(response.data.data.photos))  
        }
        }
        export const updateProfileThunk = (profile:profileSettingsType):ThunkType=> async(dispatch)=>{ 
        let response = await profileApi.profileUpdate(profile)
        console.log(response)
        }

      
export default ProfileReducer;