import { createSlice } from '@reduxjs/toolkit'
import { Payload, RegistrationState } from './types.ts'

const initialState: RegistrationState = {
  phone: '',
  name: '',
  email: '',
  hasAgreed: false,
}

const registration = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    update: (state, action: Payload) => {
      const { field, value } = action.payload
      state[field] = value
    },
  },
})

export const { update } = registration.actions

export default registration.reducer
