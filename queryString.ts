/**
 * 
 * @param customQueryString 
 */
export default function queryString(customQueryString?: string): any {

  function decode(s: any) {
    return decodeURIComponent(s.replace(additionLiteral, " "));
  }

  const urlParams: any = {};

  let match;
  const additionLiteral = /\+/g;  // Regex for replacing addition symbol with a space
  const search = /([^&=]+)=?([^&]*)/g;
  // eslint-disable-next-line no-restricted-globals
  const query = customQueryString || location.search.substring(1);

  // eslint-disable-next-line no-cond-assign
  while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);

  return urlParams;
}
