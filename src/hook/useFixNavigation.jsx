import { useCallback, useEffect } from "react";
import IO from "../utils/event-manager/intersectionObserver";

export function useFixNavigation() {
  const callback = useCallback(entries => {
    const target = document.querySelector(".fixed-navigation");
    entries.forEach(entry => {
      if (entry.intersectionRatio === 0) {
        target.classList.add("fixed");
      } else {
        target.classList.remove("fixed");
      }
    });
  }, []);

  useEffect(() => {
    const target = document.querySelector(".navigation-wrap");
    const observer = IO.connectIO(target, callback, { rootMargin: "-44px" });

    return () => {
      IO.disconnectIO(observer);
    };
  }, [callback]);
}
