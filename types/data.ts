export interface Logo {
  label: string | null
  value: string
}

export interface LogoSliderProps {
  rtl?: boolean
  initialSlide?: number
  speed?: number
  labeled?: boolean
  slidesToShow?: number
}
