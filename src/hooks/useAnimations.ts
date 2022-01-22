import { useEffect, useRef, useState } from "react";

export default function useAnimate(
  className: string,
  duration: number,
  dependencies: Array<any>
) {
  const [animate, setAnimate] = useState('');
  const ref = useRef<boolean>();

  useEffect(() => {
    if (ref.current) {
      setAnimate(className);
    }
    ref.current = true;
    const timeout = setTimeout(() => {
      setAnimate('');
    }, duration);
    return () => clearTimeout(timeout);
  }, dependencies);

  return animate;
}
