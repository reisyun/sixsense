import React, { useEffect } from 'react';

/**
 * target 이외를 클릭한 경우 handler 호출
 */
export const useOutsideClick = (
  target: React.RefObject<Element>,
  handler: (event?: React.MouseEvent) => void,
) => {
  useEffect(() => {
    const handleMouseDown = (event: any) => {
      const outside = target.current && !target.current.contains(event.target);

      // 클릭한 곳이 타겟의 외부인 경우
      if (outside) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleMouseDown, { passive: false });
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [target, handler]);
};
