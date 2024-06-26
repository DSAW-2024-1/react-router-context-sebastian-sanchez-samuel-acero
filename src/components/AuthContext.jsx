import React, { createContext, useReducer,useContext} from 'react';

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
        localStorage.removeItem('isAuthenticated');
        return {
            ...state,
            isAuthenticated: false,
            user: null,
        };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    localStorage.setItem('isAuthenticated', true)
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ login, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext);
  };