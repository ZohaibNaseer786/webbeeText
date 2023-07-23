import { combineReducers } from '@reduxjs/toolkit';

import UserDetailReducer from './slices/UserSlice';

const rootReducer = combineReducers({
  user_details: UserDetailReducer,
});

export default rootReducer;
