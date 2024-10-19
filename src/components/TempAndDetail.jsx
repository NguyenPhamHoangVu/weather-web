import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TempAndDetail = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units, // Accept units as a prop
}) => {
  const verticalDetails = [
    {
      id: 1,
      icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°C`,
    },
    {
      id: 2,
      icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`, // Use units here
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°C`,
    },
    {
      id: 4,
      icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°C`,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-2xl text-cyan-300">
        {details}
      </div>
      <div className="flex flex-row items-center justify-between py-3">
        <img src={icon} alt="weather icon" className="w-30" />
        <p className="text-4xl font-bold">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col items-start space-y-3">
          {verticalDetails.map(({ id, icon: Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon size={25} className="mr-2" />
              {`${title}:`}
              <span className="font-medium ml-1">{`${value}`}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
        {horizontalDetails.map(({ id, icon: Icon, title, value }) => (
          <div key={id} className="flex items-center space-x-2">
            <Icon size={20} />
            <p className="font-light ml-1">
              {`${title}:`}
              <span className="font-medium ml-1">{`${value}`}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetail;
