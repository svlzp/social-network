import { ThunkAction } from "redux-thunk";
import { resultCodes, userApi } from "../component/api/api";
import { loginDataType } from "../types";
import { RootState } from "./store";


const AUTH = 'AUTH'
const LOGOUT_USER ='LOGOUT-USER'
const CAPTCHA ='CAPTCHA'
export type loginType ={
    id:number
    email:string
    login:string 
    captcha: {url:string} | null
}

type initialStateType={
  id: number | null
  email :string| null
  login :string| null
  isAuth: boolean 
  captcha: {url:string} | null
}

let initialState={
   id : null,
email : null,
login : null,
isAuth: false,
captcha: null
}
type ActionType = authACType|authLogoutACType|captchaACType

  const authReducer = (state:initialStateType = initialState , action: ActionType):initialStateType=>{

   switch(action.type){

      case AUTH:{
      return{...state, ...action.data , isAuth: true}
      }
      case LOGOUT_USER:{
      return{...state,  isAuth: false}
      }
      case CAPTCHA:{
      return{...state,captcha: {...action.captcha}}
      }
      default:
      return state
      }
      }
      type authACType={
        type: typeof AUTH
        data: loginType   
        }
  export const authAC =(data :loginType):authACType=>{
      return{type: AUTH , data}
    }
    type authLogoutACType ={
      type: typeof LOGOUT_USER
    }
    export const authLogoutAC =():authLogoutACType=>{
      return{type: LOGOUT_USER }
    }
    type captchaACType ={
      type: typeof CAPTCHA
      captcha:{url:string}
    }
    export const captchaAC =(captcha:{url:string}):captchaACType=>{
      return{type: CAPTCHA, captcha}
    }

    type ThunkType = ThunkAction<Promise<void>,RootState , unknown ,ActionType>

    export const authThunk = ():ThunkType=>async(dispatch)=>{     
        let data = await userApi.authMe()     
          if(data.resultCode === resultCodes.Success){
            dispatch(authAC(data.data))         
          }
        }

        export const logoutThunk = ():ThunkType=>async(dispatch)=>{     
           let response = await userApi.logout()    
              if(response.data.resultCode === resultCodes.Success){
                dispatch(authLogoutAC())         
              }
            }
                 
      export const logoinThunk = (value:loginDataType ,setStatus:any):ThunkType=>async(dispatch)=>{ 
            let response = await userApi.login(value)    
            if(response.data.resultCode === resultCodes.Success){
              dispatch(authAC(response.data.data))   
            }
            else{
              if(response.data.resultCode === resultCodes.captcha){
                let captcha = await userApi.captcha()
                dispatch(captchaAC(captcha.data))
              }            
              setStatus(response.data.messages)
            }
          }
          
    




  export default authReducer;