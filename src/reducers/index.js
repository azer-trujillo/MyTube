import { combineReducers } from 'redux';
import authReducer from './auth';
import videosReducer from './videos';

export default combineReducers({
  auth: authReducer,
  videos: videosReducer
});
