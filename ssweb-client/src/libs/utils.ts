/**
 * 첫번째 글자를 대문자로 변경
 *
 * @param str
 */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * 받아온 수 만큼 배열에 더미 추가
 *
 * @param length
 */
export const range = (length: number) => Array.from({ length }, (_, i) => i);

/**
 * [얕은 비교] 배열 내 값의 중복을 제거
 *
 * @param array
 */
export function unique<T>(array: Array<T>): Array<T> {
  const uniq = new Set<T>();
  array.map((data: T) => uniq.add(data));

  return [...uniq];
}

/**
 * `rAF`를 이용해 스크롤 이벤트 최적화
 *
 * @param callback
 */
export const throttle = (callback: () => void) => {
  let ticking = false;

  if (!ticking) {
    requestAnimationFrame(() => {
      ticking = false;
      callback();
    });

    ticking = true;
  }
};
