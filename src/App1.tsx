import React, { useEffect } from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Advertising from './component/Advertising/Advertising';
import DialogContainer from './component/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import Music from './component/Music/Music';
import StartPage from './component/startPage/startPage';
import UsersContainer from './component/users/usersContainer';
import HederContainer from './component/Heder/HederContainer';
import ProfileContainer from './component/Content/ProfileContainer';
import LoginContainer from './component/login/loginContainer';
import { initializedThunk } from './redux/appReducer';
import Preloader from './component/preloader/preloader';
import NewsContainer from './component/News/NewsContainer';
import SettingsContainer from './component/Settings/settingsContainer';
import { useAppDispatch, useAppSelector } from './types';


function App1() {
  const initialized =useAppSelector(state=>state.app.initialized)
  const dispatch = useAppDispatch() 
  useEffect(()=>{
    dispatch(initializedThunk())},[])
 
 
  return (

    <div className='app-social' > 
      <HederContainer/>     
      <NavBar/>
      <div className='social-content'>
      <Routes >
      <Route path='/'        element={<StartPage/>} />
      <Route path='/profile/*' element={<ProfileContainer/>}>
        <Route path=':userId' element={<ProfileContainer/>}/>
      </Route>
      <Route path='/dialogs' element={<DialogContainer/>}/>
      <Route path='/users'   element={<UsersContainer/>}/>
      <Route path='/news'    element={<NewsContainer/>} />
      <Route path='/music'   element={<Music/>}/>
      <Route path='/settings'element={<SettingsContainer/>}/>
      <Route path='/login'element={<LoginContainer/>}/>
      </Routes>
      </div>
      <Advertising/>
    </div>

  );
}

export default App1;
