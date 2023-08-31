import { useEffect, useState } from "react";

const ONE_MINUTE_IN_MILLISECONDS = 60000;

export default function useTimer() {
  const [actualDate, setActualDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setActualDate(new Date());
    }, ONE_MINUTE_IN_MILLISECONDS);

    return () => {
      clearInterval(interval);
    };
  }, [setActualDate]);

  return { actualDate };
}
