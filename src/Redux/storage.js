import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contaSlise';
import { filterSlice } from './filterSlise';
import { userSlice } from './userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
  whiteList: ['token']
}

export const store = configureStore({
  reducer:{
    user: persistReducer(persistConfig, userSlice.reducer),
    contacts: contactsSlice.reducer,
  filter: filterSlice.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
})

export const persist = persistStore(store)

// export const storage =  configureStore({
//   reducer:{
//     contacts: contactsSlice.reducer,
//     filter: filterSlice.reducer,
//   }
// })