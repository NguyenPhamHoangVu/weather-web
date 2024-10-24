import React from "react";

const Forecast = ({ title, data }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium text-xl uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex flex-row items-center justify-between ">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Hiển thị thời gian cho 5 giờ tiếp theo */}
            <p className="font-light text-sm">{d.title}</p>
            <img src={d.icon} alt="weather icon" className="w-10" />
            <p className="font-medium text-sm">{`${d.temp.toFixed()}°C`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
