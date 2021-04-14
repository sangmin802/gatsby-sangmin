import { useEffect } from "react";
import _ from "../utils/scrollPostProps";
import IO from "../utils/event-manager/intersectionObserver";

export function useIntersectionObserver(callback, element, option = {}) {
  useEffect(() => {
    const target = document.querySelector(element);
    const observer = IO.connectIO(target, callback, option);
    return () => {
      IO.disconnectIO(observer, target);
    };
  }, [callback, element, option]);
}
