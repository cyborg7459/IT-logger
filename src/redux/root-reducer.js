import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import issueReducer from './issue/issue.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['issues']
  }

const rootReducer = combineReducers({
    issues : issueReducer
})

export default persistReducer(persistConfig, rootReducer);