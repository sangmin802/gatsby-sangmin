import { useEffect, useMemo } from "react";
import { throttle } from "../utils/event-manager/throttle";

export function useThrottle(resetKey) {
  const throttleAct = useMemo(() => throttle(), []);

  useEffect(() => {
    return () => throttleAct(null);
  }, [resetKey, throttleAct]);

  return throttleAct;
}
