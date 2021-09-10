
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
    
    } from "../actions/types"
    
let initState={
    token:localStorage.getItem('token'),
    user:null,
    isAuth:localStorage.getItem('isAuth'),
    error:null
}

const AuthReducer=(state=initState,action)=>{
switch (action.type) {
    case LOGIN_SUCCESS :
    case REGISTER_SUCCESS :
        localStorage.setItem('token',action.payload.token)
        localStorage.setItem('isAuth','true')
        return{...state,
            token : action.payload.token,
            isAuth:true,
            error:null
        }
    case LOGIN_FAIL :
    case LOAD_USER_FAIL :
    case REGISTER_FAIL :
        localStorage.removeItem('token')
        return{...state,
            isAuth:false,
            error:action.payload
        }
    case LOAD_USER_SUCCESS :
        return{...state,
            user:action.payload,
            isAuth:true,
            error :null
        }
    case LOGOUT :
        localStorage.removeItem('token')
        localStorage.removeItem('isAuth')
        return{
            isAuth: false ,
            error : null,
            user:null
        }

    default:
        return state;
}

}

export default AuthReducer