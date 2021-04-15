import React, { useRef } from "react";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";

const Observer = ({ callback }) => {
  const observer = useRef(null);
  useIntersectionObserver(callback, observer.current);
  return <article className="observer" ref={observer}></article>;
};

export default Observer;
