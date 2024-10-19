import React, { useEffect, useState } from "react";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetail from "./components/TempAndDetail";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./service/weatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "an giang" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const data = await getFormattedWeatherData({ ...query, units });
      console.log(data); // Kiểm tra xem dữ liệu đã được nhận đúng không
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700"; // Khi không có dữ liệu
    const threshold = units === "metric" ? 20 : 60; // Ngưỡng nhiệt độ
    console.log(weather.temp); // Kiểm tra giá trị nhiệt độ
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700"; // Nền xanh
    return "from-yellow-700 to-orange-700"; // Nền vàng
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetail weather={weather} units={units} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}
    </div>
  );
};

export default App;
