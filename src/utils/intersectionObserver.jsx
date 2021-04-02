const IO = {
  connectIO(t, c) {
    const observer = new IntersectionObserver(c);
    observer.observe(t);
    return observer;
  },

  disconnectIO(o, t) {
    o.unobserve(t);
  },
};

export default IO;
