import { useEffect, useState } from "react";

function useWeather() {
  const [weather, setWeather] = useState({
    weather: "",
    temperature: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();

      const weather = data.weather[0].main.toLowerCase();
      const temperature = data.main.temp;

      setTimeout(() => {
        setWeather({
          weather,
          temperature,
        });
        setLoading(false);
      }, 2000);
    }, (err) => {
      setError(err);
      setLoading(false);
    });
  }, []);

  return { weather, loading, error, setWeatherInfo: setWeather };
}

export default useWeather;
