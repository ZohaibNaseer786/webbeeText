import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  user: object;
  userProfile: object;
}

const initialState: IUser = {
  user: {},
  userProfile: {},
};

export const userSlice = createSlice({
  name: 'user_details',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setUser, setUserProfile } = userSlice.actions;

//selector
export const selectUser = (state: { user_details: { user: object } }) =>
  state.user_details.user;

export const selectUserProfile = (state: {
  user_details: { userProfile: object };
}) => state.user_details.userProfile;

export default userSlice.reducer;
