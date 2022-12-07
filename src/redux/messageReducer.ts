
const ADD_MESSAGE = 'ADD-MESSAGE';
export type DialogsDataType={
    id:number 
    name:string
}
export type messageDataType ={
    id:number
    message:string
    
}
type initialStateType ={
    DialogsData:Array<DialogsDataType>
    messageData:Array<messageDataType>
}

let initialState ={
    DialogsData:[
        { id: 1, name:'Iulia' }, 
        { id: 2, name:'Andrey'},
        { id: 3, name:'Nick'  },
        { id: 4, name:'Sveta' },
        { id: 5, name:'Sasha' },
        { id: 6, name:'Valera'}     
    ],
    messageData:[
        {id:1,message:'Hi'},
        {id:2,message:'text text txet text'},
        {id:3,message:'text text txet text'},
        {id:4,message:'Yo YO'},
        {id:5,message:'Yo'},
        {id:6,message:'bls bla bla'}
],

}
 const MessageReducer = (state = initialState , action:MessageActionType):initialStateType =>{
switch(action.type)  {   
  
  case ADD_MESSAGE:
      let b = Math.random()
      let message ={
          id: b,
          message: action.messageText,
        
      }
      let stateCopy ={...state};
     
            stateCopy.messageData =[...state.messageData];
            stateCopy.messageData.push(message)
            
          
        return stateCopy ;
      
  default:
      return state ;
   }

}
type MessageActionType ={
    type: typeof ADD_MESSAGE
    messageText:string
}
export const MessageAction =(messageText:string):MessageActionType=>{
   return {type: ADD_MESSAGE ,messageText}
   
}

export default MessageReducer;