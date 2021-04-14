import { useCallback, useEffect } from "react";

export function useSlider(navigation) {
  const callback = useCallback(() => {
    const parentNode = e.target.parentNode;
    const parentWidth = parentNode.clientWidth;
    const half = parentWidth / 2;
    const parentX = parentNode.getBoundingClientRect().x;
    const targetX = e.target.getBoundingClientRect().x;
    const relativeX = targetX - parentX;
    let margin = 0;
    let gap = 0;
    if (relativeX > half) {
      margin =
        getComputedStyle(e.target)
          .getPropertyValue("margin-right")
          .replace("px", "") * 1;
      gap = relativeX - half;
    }
    if (relativeX >= parentWidth) {
      console.log("거의 끝까지 임");
      gap = half;
    }
    const style = `
      transform : translate(${-(gap + margin)}px)
    `;
    parentNode.setAttribute("style", style);
  }, []);

  useEffect(() => {}, [navigation, callback]);
}
