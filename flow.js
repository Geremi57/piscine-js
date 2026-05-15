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
