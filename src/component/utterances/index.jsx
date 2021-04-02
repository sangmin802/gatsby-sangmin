import React, { useEffect, createRef } from "react";

const src = "https://utteranc.es/client.js";
const theme = "github-light";

const Utterances = React.memo(({ repo }) => {
  const containerRef = createRef();

  useEffect(() => {
    const utterances = document.createElement("script");

    const attributes = {
      src,
      repo,
      theme,
      "issue-term": "pathname",
      label: "comment",
      crossOrigin: "anonymous",
      async: "true",
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current.appendChild(utterances);
  }, [repo]);

  return <div className="utterances" ref={containerRef} />;
});

export default Utterances;
