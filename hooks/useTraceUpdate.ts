import { useEffect, useRef } from "react";

/**
 * https://stackoverflow.com/a/51082563/5663961
 * @param props 
 */
export default function useTraceUpdate(props: any) {
  const prev = useRef<any>(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {} as any);
    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps);
    }
    prev.current = props;
  });
}
