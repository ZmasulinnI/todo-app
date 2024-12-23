import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { taskReducer } from './taskReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { modalReducer } from './modalReducer'


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ //TODO удалить это
    todos: taskReducer,
    modal: modalReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)