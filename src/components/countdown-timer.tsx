import React, { useState, useEffect } from "react";
import { body } from "@fonts";

interface CountdownTimerProps {
  targetDate: Date; // The target date we're counting down to
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ d: string; h: string; m: string }>(
    { d: "00", h: "00", m: "00" },
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ d: "00", h: "00", m: "00" });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0");
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0");
        const minutes = Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0");

        setTimeLeft({ d: days, h: hours, m: minutes });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
      <div className="inline-flex">
        <div className={`${body.className} text-9xl`}>{timeLeft.d}</div>
        <div className={`${body.className} mx-14 text-9xl`}>{timeLeft.h}</div>
        <div className={`${body.className} text-9xl`}>{timeLeft.m}</div>
      </div>
    </>
  );
};

export default CountdownTimer;
