/* eslint-disable no-param-reassign */
import { useEffect, useRef } from 'react';

/**
 * Usage:
 * 
 * const Component = React.forwardRef<HTMLElement, Props>((props, ref) => {
 *   const el = useRef<HTMLElement>(null);
 *   const combinedRef = useCombinedRefs<HTMLElement>(ref, el);
 * 
 *   return <span ref={combinedRef}></span>
 * 
 * @param refs React.RefObject's created with useRef or createRef
 */
export default function useCombinedRefs<T>(...refs: any) {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    refs.forEach((ref: any) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
