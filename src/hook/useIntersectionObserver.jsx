import { useEffect } from "react";
import IO from "../utils/event-manager/intersectionObserver";

export function useIntersectionObserver(callback, target) {
  useEffect(() => {
    if (!target) return;
    const observer = IO.connectIO(target, callback);
    return () => {
      IO.disconnectIO(observer, target);
    };
  }, [callback, target]);
}
