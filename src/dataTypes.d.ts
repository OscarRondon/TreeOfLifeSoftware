export interface Tech {
  id: number
  name: string
  heightPerc: string
  imgSrc: string
  active: boolean
}

export interface Service {
  id: number
  imgSrc: string
  tittle: string
  detail: string[]
}

export interface ContactUsData {
  Email: string
  Name: string
  Comments: string
  'g-recaptcha-response': string
}
