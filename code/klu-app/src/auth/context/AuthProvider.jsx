import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';



const initialState = {
    logged: false,
    twofactor: false,
    resetPass: false,
    channel: 1,
    deviceId: 'pruebas'
}


const init = () => {
    const user = JSON.parse(localStorage.getItem('userLogged'));

    return {
        logged: !!user,
        userLogged: user,
    }
}


const dateFormat = () => {
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
      
      const d = new Date();
      let days = d.toLocaleDateString();
      let h = addZero(d.getHours());
      let m = addZero(d.getMinutes());
      let s = addZero(d.getSeconds());
      let date = days+" "+ h + ":" + m + ":" + s;
    return date;
}


export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = async (objLogin={}) => {
        console.log('AuthProvider',objLogin);
        const userLogged = {
            userId: objLogin.userId,
            name: objLogin.name,
            email: objLogin.email,
            sessionId: objLogin.sessionId,
            date: dateFormat()
        }
        const action = {
            type: types.login,
            payload: userLogged
        }
        localStorage.setItem('userLogged', JSON.stringify(userLogged));
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('userLogged');
        const action = {type: types.logout}
        dispatch(action);
    }


    return (
        <AuthContext.Provider 
        value={{ 
            ...authState, 
            login,
            logout 
        }}>
            {children}
        </AuthContext.Provider>

    )
}
