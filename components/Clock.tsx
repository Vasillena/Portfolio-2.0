"use client";

import { useEffect, useState } from "react";

import { MazzardThin } from "@/utils/fonts";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  //   const seconds = time.getSeconds().toString().padStart(2, "0");
  const day = time.toLocaleString("default", { weekday: "long" });
  const date = time.getDate();
  const month = time.toLocaleString("default", { month: "long" });

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="relative w-full h-auto flex flex-col justify-center items-center p-2.5 bg-linear-to-t from-[#1E1E1E] to-[#434343] text-white rounded-2xl aspect-square">
        <div className="absolute inset-3 flex justify-center self-center border border-white rounded-lg pointer-events-none aspect-square" />
        {/* <div className="border border-white aspect-square flex flex-col justify-center items-center rounded-3xl"> */}
        <div className={`text-5xl ${MazzardThin.className}`}>
          {hours}:{minutes}
        </div>
        <div className="text-center">
          {month} {date}
        </div>
        {/* </div> */}
      </div>
      <p className="md:text-2xl pt-2">Clock</p>
    </div>
  );
};

export default Clock;
