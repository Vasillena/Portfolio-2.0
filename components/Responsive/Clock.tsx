"use client";

import { useEffect, useState } from "react";

import { MazzardThin } from "@/utils/fonts";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  const formatter = new Intl.DateTimeFormat("default", { month: "long" });
  const month = formatter.format(time);
  const date = time.getDate();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="relative w-full h-auto flex flex-col justify-center items-center p-2.5 bg-linear-to-t from-[#1E1E1E] to-[#434343] text-white rounded-2xl aspect-square">
        <div className="absolute inset-3 flex justify-center self-center border border-white rounded-lg pointer-events-none aspect-square" />
        <div className={`text-5xl ${MazzardThin.className}`}>
          {hours}:{minutes}
        </div>
        <div className="text-center">
          {month} {date}
        </div>
      </div>
      <p className="md:text-2xl pt-2">Clock</p>
    </div>
  );
};

export default Clock;
