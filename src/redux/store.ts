import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import messageReducer from './messageReducer'
import profileReducer from './profileReducer'
import UserReducer from "./userReducer";
import thunkMiddleware from "redux-thunk"
import authReducer from "./authReducer";
import appReducer from "./appReducer";


let rootReducer = combineReducers({
   MessagePage: messageReducer,
   ProfilePage: profileReducer,
   UsersPage: UserReducer,
   auth: authReducer,
   app: appReducer
   
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

let store = createStore(rootReducer ,applyMiddleware(thunkMiddleware));












export default store;