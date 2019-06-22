import { curry } from 'fp-ts/es6/function';

export default curry(function remove<T>(start: number, count: number, list: T[]) {
  var result: T[] = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});
