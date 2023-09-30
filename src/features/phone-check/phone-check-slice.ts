import { createSlice } from '@reduxjs/toolkit'
import { Payload, PhoneCheckState } from './types.ts'

const initialState: PhoneCheckState = {
  phone: '',
  password: '',
}

const phoneCheck = createSlice({
  name: 'phone-check',
  initialState,
  reducers: {
    write: (state, action: Payload) => {
      const { field, value } = action.payload
      state[field] = value
    },
  },
})

export const { write } = phoneCheck.actions

export default phoneCheck.reducer
