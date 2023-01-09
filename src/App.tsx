import React, { FC , useState , useEffect } from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
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
import { NavLink } from 'react-router-dom';

  const { Header, Content, Footer, Sider } = Layout;
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem(<NavLink to='/profile'>Profile</NavLink>, '1', <PieChartOutlined />),
    getItem(<NavLink to='/dialogs'>Message</NavLink>, '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem(<NavLink to='/users' >All User</NavLink>, '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Services', 'sub2', <TeamOutlined />, [getItem(<NavLink to='/news'>News</NavLink>
    , '6'), getItem( <NavLink to='/music'>Music</NavLink>, '8')]),
    getItem(<NavLink to='/settings'>Settings</NavLink>, '9', <FileOutlined />),
  ];
  
const App : FC =()=>{ const [collapsed, setCollapsed] = useState(false);
  const initialized = useAppSelector(state=>state.app.initialized)
  const dispatch = useAppDispatch() 
  useEffect(()=>{
    dispatch(initializedThunk())},[])


    const {
      token: { colorBgContainer },
   } = theme.useToken();
  
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>        
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
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
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  };

  export default App;