/**
 * Get an element from the parameter 'array' even if the 'i' is out of bound, in that case
 * the element count start from the beginning of the array.
 *
 * @template T
 * @param {Array<T>} array - An array of items from which picking element i
 * @param {number} i - A possibly over bound integer index
 * @return {T}
 */
function getElement(array, i) {
  const idx = i % array.length;
  const newp = idx > array.length ? array.length - idx : idx;
  return array[newp];
}

module.exports = {getElement}
