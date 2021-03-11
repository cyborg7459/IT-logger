import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
    // whitelist: ['user']
  }

const rootReducer = combineReducers({
    // names : namesReducer,
    // user : userReducer,
    // memories : memoriesReducer
})

export default persistReducer(persistConfig, rootReducer);