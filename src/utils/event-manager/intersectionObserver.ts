const IO = {
  connectIO(t, c, o = null) {
    const observer = new IntersectionObserver(c, o);
    observer.observe(t);
    return observer;
  },

  disconnectIO(o, t) {
    o.unobserve(t);
  },
};

export default IO;
