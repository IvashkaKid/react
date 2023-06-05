export const loginUser = (userData) => {
    const user = { login: userData.login, password: userData.password };
    return {
      type: 'LOGIN_USER',
      payload: user
    };
  };
  
  export const registerUser = (userData) => {
    const user = { login: userData.login, password: userData.password, name: userData.name };
    
    return {
      type: 'REGISTER_USER',
      payload: user
    };
  };
  
  export const logoutUser = () => { 
    return {
      type: 'LOGOUT_USER'
    };
  };
  
  