import { combineReducers, configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: combineReducers({}),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
