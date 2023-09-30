import { combineReducers, configureStore } from '@reduxjs/toolkit'

import registrationReducer from '../features/registration/registration-slice.ts'
import phoneCheckReducer from '../features/phone-check/phone-check-slice.ts'

export const store = configureStore({
  reducer: combineReducers({
    registration: registrationReducer,
    phoneCheck: phoneCheckReducer,
  }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
