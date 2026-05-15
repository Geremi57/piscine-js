function currify(callback) {
    return function collect(...args) {
        if (args.length >= callback.length) {

            return callback(...args);
        }
        return function(...otherArgs) {
            const combined = [...args,...otherArgs];

            return collect(...combined);
        };
    };
}

// const mult2 = (el1, el2) => el1 * el2;
// console.log(mult2(2, 2)); // -> 4

// const mult2Curried = currify(mult2);
// console.log(mult2Curried(2)(2)); 