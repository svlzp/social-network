


import { ThunkAction } from "redux-thunk"
import { authThunk } from "./authReducer"
import { RootState } from "./store"

const INITIALIZED = 'INITIALIZED'
type initializedACType ={
  type: typeof INITIALIZED
}
  type initialStateType ={
  initialized: boolean
}

let initialState={
initialized: false
}
type ActionType = initializedACType

const appReducer = (state = initialState , action :any):initialStateType=>{
  
    switch(action.type){

        case INITIALIZED:{
            return{...state,  
              initialized: true 
            }
          }
        
          default:
            return state 
    }
}

  export const initializedAC =():initializedACType  =>{
  return{type: INITIALIZED };
  }  
  type ThunkType = ThunkAction<Promise<void>,RootState , unknown ,ActionType>

    export const initializedThunk = ():ThunkType=> async(dispatch)=>{     
       let promise = dispatch(authThunk())
       promise.then(()=>{ dispatch(initializedAC())})
        }
      
     




  export default appReducer;