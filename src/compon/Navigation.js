import React, { } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {logoutUser } from '../actions/userActions.js';
import { Menu, Button } from 'antd';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Posts from "./PostPage";
import Login from "./LoginPage";
import Registration from "./RegisterPage";

const Navigation = () => {
const currentUser = useSelector((state) => state.user.currentUser);
const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

const users = useSelector((state) => state.user.users);
 console.log(users);
  return (
    <Router>
    <Menu mode="horizontal">
      {currentUser ? (
        <>
          <Menu.Item><Link to="/posts">Посты</Link></Menu.Item>
          <Menu.Item>{currentUser.login}</Menu.Item>
          <Menu.Item>
            <Button onClick={handleLogout}>Выход</Button>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item>
            <Button type="primary">
              <Link to="/posts">
              Посты   
              </Link>    
            </Button>
          </Menu.Item>        
          <Menu.Item>
            <Button type="primary" >
            <Link to="/login">
              Логин   
              </Link>  
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button type="primary">
              <Link to="/registration">
              Регистрация   
              </Link>    
            </Button>
          </Menu.Item>
        </>
      )}
    </Menu>
            <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
    </Router>
  );
  
};

export default Navigation;
