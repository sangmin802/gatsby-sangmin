export function throttle() {
  let isActing = false;
  return async function throttleAct(callback) {
    if (!isActing) {
      isActing = true;
      await callback();
      isActing = false;
      return;
    }
    return;
  };
}
