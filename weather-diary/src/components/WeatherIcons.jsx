import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy
} from "react-icons/ti";

export const weatherIconMap = {
  clear: TiWeatherSunny,
  clouds: TiWeatherCloudy,
  rain: TiWeatherShower,
  drizzle: TiWeatherDownpour,
  thunderstorm: TiWeatherStormy,
  snow: TiWeatherSnow,
  mist: TiWeatherWindyCloudy,
  smoke: TiWeatherWindyCloudy,
  haze: TiWeatherWindyCloudy,
  dust: TiWeatherWindyCloudy,
  fog: TiWeatherWindyCloudy,
  sand: TiWeatherWindyCloudy,
  ash: TiWeatherWindyCloudy,
  squall: TiWeatherWindyCloudy,
  tornado: TiWeatherWindyCloudy,
  default: TiWeatherPartlySunny,
};