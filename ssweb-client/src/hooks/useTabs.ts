import { useState } from 'react';

/**
 * `key = keys[index]` 배열에서 아이템을 가져오는 원리와 동일
 */
export function useTabs<T>(keys: Array<T>, initialIndex = 0) {
  const [index, setIndex] = useState<number>(initialIndex);
  const key: T = keys[index];

  return [key, setIndex] as const;
}
