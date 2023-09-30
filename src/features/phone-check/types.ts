export interface PhoneCheckState {
  [key: string]: string | boolean

  password: string

  phone: string
}

export interface Payload {
  payload: {
    field: string
    value: string
  }
}
