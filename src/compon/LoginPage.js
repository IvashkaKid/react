import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions.js';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ login: '', password: '' });

  const handleLogin = () => {
    if (userData.login && userData.password) {
      dispatch(loginUser(userData));
      navigate('/posts')
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Input
        type="text"
        name="login"
        value={userData.login}
        onChange={handleChange}
        placeholder="Имя пользователя"
      />
      <Input.Password
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="Пароль"
      />
      <Button type="primary" onClick={handleLogin}>
        Вход
      </Button>
    </>
  );
};

export default Login;
