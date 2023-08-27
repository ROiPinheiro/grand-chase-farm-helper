import { useEffect, useState } from "react";

let interval = 0;

export default function useTimer() {
  const [actualDate, setActualDate] = useState(new Date());

  useEffect(() => {
    interval = setInterval(() => setActualDate(new Date()), 1000);

    return () => {
      console.log("clear");

      clearInterval(interval);
    };
  }, [setActualDate]);

  return [actualDate];
}
