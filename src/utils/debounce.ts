export const debounce = <T>(fn: (...args: T[]) => void, t: number) => {
  let timeoutId: NodeJS.Timeout;

  return function (...args: T[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => fn(...args), t);
  };
};
