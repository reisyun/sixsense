import { useState, useEffect } from 'react';
import { throttle } from '@/libs/utils';

/**
 * 스크롤을 아래로 내릴 때 트리거
 */
export function useScrollDown() {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      const betweenY = scrollY - lastScrollY;
      throttle(() => setTrigger(betweenY >= 0));
      setLastScrollY(scrollY);
    };

    document.addEventListener('scroll', handleScroll, { passive: false });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return trigger;
}
