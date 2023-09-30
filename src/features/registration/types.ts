export interface RegistrationState {
  [key: string]: string | boolean

  email: string
  hasAgreed: boolean
  name: string
  phone: string
}

export interface Payload {
  payload: {
    field: string
    value: boolean | string
  }
}
