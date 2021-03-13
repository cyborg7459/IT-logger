import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import issueReducer from './issue/issue.reducer';
import userReducer from './user/user-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['issues', 'users']
  }

const rootReducer = combineReducers({
    issues : issueReducer, 
    users : userReducer
})

export default persistReducer(persistConfig, rootReducer);