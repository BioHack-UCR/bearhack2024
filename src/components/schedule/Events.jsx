"use client";
import { useRef, useState } from "react";

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start) &&
      new Date() < new Date(events[events.length - 1].start)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Tuesday"
  );
  const eventsRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center text-white gap-8 pb-24 text-sm lg:text-base">
      <div className="font-header text-4xl lg:text-5xl">Schedule</div>
      Pacific Standard Time (PST)
      <div className="flex flex-row gap-0 lg:gap-2 border border-white bg-gradient-to-r from-bear-page-gradient-1 to-bear-page-gradient-2 rounded-full">
        {totalDays.map((day, index) => (
          <div
            className={`px-1 lg:px-8 py-2 rounded-full transition-colors text-xs md:text-base ${
              selectedDay === day ? "bg-white/30" : "hover:bg-white/10"
            }`}
            key={index}
            onClick={() => {
              setSelectedDay(day);
              eventsRef.current.style.animation = "none";
              setInterval(() => (eventsRef.current.style.animation = ""), 0);
            }}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="mt-8 w-4/5 lg:w-3/4 grid grid-cols-8 px-4 items-center content-center text-center font-base">
        <div className="col-span-2 md:col-span-1">Time</div>
        <div className="col-span-2">Event</div>
        <div className="col-span-4 md:col-span-3">Details</div>
        <div className="hidden md:block">Type</div>
        <div className="hidden md:block">Location</div>
      </div>
      <div
        className="w-4/5 lg:w-3/4 flex flex-col items-center p-4 gap-4 border border-white/50 bg-gradient-to-r from-bear-page-gradient-1 to-bear-page-gradient-2 rounded-lg opacity-0 translate-y-1 animate-slide-in"
        ref={eventsRef}
      >
        {events
          .filter(({ day }) => day === selectedDay)
          .map(({ start, summary, description, type, location }, index) => (
            <div
              className="w-full flex flex-col items-center gap-4 opacity-50"
              key={index}
            >
              {index > 0 && <div className="w-full h-px bg-white" />}
              <div className="w-full my-3">
                <div className="grid grid-cols-8 items-center content-center text-center">
                  <div className="col-span-2 md:col-span-1 font-bold rounded-full m-auto w-3/4 py-2 bg-white/10">
                    {start.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "America/Los_Angeles",
                    })}
                  </div>
                  <div className="text-normal lg:text-lg col-span-2 font-bold">
                    {summary}
                    <div className="block md:hidden">@ {location}</div>
                    <div className="block md:hidden font-normal">{type}</div>
                  </div>
                  <div className="col-span-4 md:col-span-3 px-4">
                    {description.split("\n")[1]}
                  </div>
                  <div className="hidden md:block font-bold">
                    {description.split("\n")[0].substr(1)}
                  </div>
                  <div className="hidden md:block font-bold">{location}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Events;
