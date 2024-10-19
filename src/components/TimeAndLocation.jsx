import React from "react";

const TimeAndLocation = ({
  weather: { localTime, name, country } = {}, // Sử dụng localTime thay cho formattedLocalTime
}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">{localTime} </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-bold">
          {name}, {country}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
