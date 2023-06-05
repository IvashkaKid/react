// reducers/userReducer.js
const initialState = {
    currentUser: null,
    users: []
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            // Проверяем, есть ли пользователь с таким логином и паролем
            const { login, password } = action.payload;
            const user = state.users.find(
              (user) => user.login === login && user.password === password
            );
      
            return {
              ...state,
              currentUser: user ? user : null
            };
        case 'REGISTER_USER':
            // Создаем нового пользователя с уникальным ID
            const newUser = {
              id: state.users.length + 1,
              name: action.payload.name,
              ...action.payload,
            };
            return {
              ...state,
              currentUser: newUser,
              users: [...state.users, newUser]
            };
        case 'SET_USER_NAME':
            const updatedUser = {
                ...state.currentUser,
                name: action.payload
            };
        return {
            ...state,
            currentUser: updatedUser
            };
      case 'LOGOUT_USER':
        return {
          ...state,
          currentUser: null
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  