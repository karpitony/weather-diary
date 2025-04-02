import { weatherIconMap } from "@/components/WeatherIcons";

function WeatherBox({ weather, loading, error }) {
  if (loading) {
    return (
      <section className="flex items-center justify-center mt-4 w-full bg-white shadow-md rounded-lg px-8 py-4 animate-pulse">
        {/* 아이콘 자리 */}
        <div className="flex w-24 h-24 bg-gray-300 rounded-lg" />

        {/* 텍스트 자리 */}
        <div className="flex flex-col items-start justify-center w-full ml-8 gap-2 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4" />
          <div className="h-6 bg-gray-300 rounded w-1/2" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex items-center justify-center mt-4 w-full bg-white shadow-md rounded-lg p-4">
        <p className="text-xl font-semibold text-red-500">오류가 발생했습니다: {error}</p>
      </section>
    );
  }

  const WeatherIcon =
    weatherIconMap[weather.weather] || weatherIconMap['default'];
  return (
    <section className="flex items-center justify-center mt-4 w-full bg-white shadow-md rounded-lg px-8 py-4">
      <WeatherIcon className="flex w-24 h-24" />
      <div className="flex flex-col items-start justify-center w-full ml-8 gap-2">
        <p className="text-xl font-semibold">날씨: {weather.weather}</p>
        <p className="text-xl font-semibold">온도: {weather.temperature}°C</p>
      </div>
    </section>
  );
}

export default WeatherBox;
