import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userActions.js';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ login: '', password: '', name: '' });

  const handleRegister = () => {
    if (userData.login && userData.password && userData.name) {
      dispatch(registerUser(userData))
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
      <Input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Имя"
      />
      <Button type="primary" onClick={handleRegister}>
        Зарегистрироваться
      </Button>
    </>
  );
};

export default Registration;
