// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './RootReducer';
// export const store = configureStore({
//   reducer: rootReducer,
// });
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
// export default store
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { MMKVStorage } from '~core/configs/MMKVStore';

import rootReducer from './RootReducer';

export type RootReducer = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: MMKVStorage,
  version: 1,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user_details'],
};

const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  rootReducer,
);

const createDebugger = require('redux-flipper').default;

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(createDebugger()),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
