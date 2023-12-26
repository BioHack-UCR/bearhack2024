"use client";

import { useEffect, useState } from "react";

// approximate units for a simple implementation, can use Date API if more accuracy is needed
const units = [
  {
    unitSingular: "second",
    unitPlural: "seconds",
    millis: 1000,
  },
  {
    unitSingular: "minute",
    unitPlural: "minutes",
    millis: 60 * 1000,
  },
  {
    unitSingular: "hour",
    unitPlural: "hours",
    millis: 60 * 60 * 1000,
  },
  {
    unitSingular: "day",
    unitPlural: "days",
    millis: 24 * 60 * 60 * 1000,
  },
  {
    unitSingular: "week",
    unitPlural: "weeks",
    millis: 7 * 24 * 60 * 60 * 1000,
  },
  {
    unitSingular: "month",
    unitPlural: "months",
    millis: 30 * 24 * 60 * 60 * 1000,
  },
];

/**
 * returns block data that can be rendered for some duration
 * @param {number} duration milliseconds to convert into larger time units
 * @return {{unit:string, amount:number}[]}
 */
function calculateBlocksForDuration(duration) {
  let left = duration;
  const blocks = [];
  for (let i = units.length - 1; i >= 0 && blocks.length < 3; --i) {
    const { unitSingular, unitPlural, millis } = units[i];
    const blocksIfRemainingAdded = blocks.length + i + 1;
    const amount = Math.floor(left / millis);
    left -= millis * amount;
    if (blocksIfRemainingAdded <= 3 || amount > 0) {
      blocks.push({
        unit: amount == 1 ? unitSingular : unitPlural,
        amount: amount,
      });
    }
  }
  return blocks;
}

/**
 * Renders a countdown element with the 3 most significant time units.
 * @param {{targetTime: number}} props targetTime in millis since unix epoch (same as `Date.now()`)
 * @return {JSX.Element}
 */
const Countdown = ({ targetTime }) => {
  const [blocks, setBlocks] = useState(
    calculateBlocksForDuration(Math.max(targetTime - Date.now(), 0))
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlocks(
        calculateBlocksForDuration(Math.max(targetTime - Date.now(), 0))
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetTime]);

  return (
    <div className="flex gap-4 font-paragraph">
      {blocks.map(({ unit, amount }, index) => (
        <div className="flex flex-col items-center m-2 gap-2" key={index}>
          <div className="flex gap-2">
            {amount
              .toString()
              .padStart(2, "0")
              .split("")
              .map((digit, index) => (
                <div
                  className="text-md lg:text-5xl font-bold text-white bg-[#B3FBF780] p-3 rounded-lg"
                  key={index}
                >
                  {digit}
                </div>
              ))}
          </div>
          <div className="">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
