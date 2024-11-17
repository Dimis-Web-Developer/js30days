/**an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1. */

var join = function (arr1, arr2) {
  let joinedArr = arr1.concat(arr2);
  let merged = {};
  joinedArr.forEach((obj) => {
    if (!merged[obj.id]) {
      merged[obj.id] = { ...obj };
    } else {
      merged[obj.id] = { ...merged[obj.id], ...obj };
    }
  });
  return Object.values(merged);
};
