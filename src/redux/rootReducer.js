import { combineReducers } from '@reduxjs/toolkit';
import auth from './reducers/authSlice';
import app from './reducers/appSlice';


const appReducer = combineReducers({
    auth,
    app
})

const rootReducer = (state, action) => {
    if (action.type === 'auth/logout') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action)
}


export default rootReducer