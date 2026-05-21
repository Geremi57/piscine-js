const filterKeys = (obj, predicate) => {
     let newObj; 
    newObj =Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(key))
  );
  return newObj
};

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

// const result = filterKeys(nutrients, (key) => /protein/.test(key));
console.log(filterKeys(nutrients, (key) => /protein/.test(key))); 

const mapKeys = (obj, callback) => {
    let newObj
    newObj = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [callback(key), value])
  );
  return newObj
};

console.log(mapKeys(nutrients, (k) => `-${k}`));


const reduceKeys = (obj, callback, initialValue) => {
      if (initialValue === undefined) {
    return Object.keys(obj).reduce(callback);
  }
  let newObj
    newObj = Object.keys(obj).reduce(callback, initialValue);

    return newObj
};

console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(", ", cr)))