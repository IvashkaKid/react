import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser, logoutUser } from '../actions/userActions.js';
import { Menu, Button, Input } from 'antd';

const Navigation = () => {
const currentUser = useSelector((state) => state.user.currentUser);
const dispatch = useDispatch();
const [userData, setUserData] = useState({ login: '', password: '' });

  const handleLogin = () => {
    if (userData.login && userData.password) {
      dispatch(loginUser(userData));
    } else {
      alert('Введите имя пользователя и пароль зарегистрированного пользователя');
    }
  };

  const handleRegister = () => {
    if (userData.login && userData.password) {
    dispatch(registerUser({ ...userData, name: userData.username }));
    }else{
        alert('Введите логин и пароль нового пользователя');
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
const users = useSelector((state) => state.user.users);
 console.log(users);
  return (
    <Menu mode="horizontal">
      {currentUser ? (
        <>
          <Menu.Item>{currentUser.login}</Menu.Item>
          <Menu.Item>
            <Button onClick={handleLogout}>Выход</Button>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item>
            <Input
              type="text"
              name="login"
              value={userData.login}
              onChange={handleChange}
              placeholder="Имя пользователя"
            />
          </Menu.Item>
          <Menu.Item>
            <Input.Password
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Пароль"
            />
          </Menu.Item>
          <Menu.Item>
            <Button type="primary" onClick={handleLogin}>
              Вход
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button type="primary" onClick={handleRegister}>
              Регистрация
            </Button>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
  
};

export default Navigation;
