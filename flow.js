const flow = function(callbacks) {
return function(...args) {
    let curr = args;

   for (let i = 0; i < callbacks.length; i++) {
            const currCallback= callbacks[i];
            if (Array.isArray(curr)) {
                console.log(curr);
                curr = currCallback(...curr);
            } else {

                curr = currCallback(curr);
            }
        }
        return curr;
    };
};

const square = (nbr) => nbr * nbr;
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2;

const flowedFunctions = flow([add2Numbers, square]);
console.log(flowedFunctions(2, 3)) // -> 25