const debounce = function (func, wait) {
 
    let time
    return function(...params){
        const scope = this
        clearTimeout(time)
    
        time = setTimeout(() => {
            func.apply(scope, params)
        }, wait)
    }
}

const opDebounce = function (func, wait = 0, options = {}) {
    let timer = null
    let prev;
    let prevScope;

    const leader = options.leading || false
    let invoked = false

    return function(...params){
        prev = params
        prevScope = this

        if (leader == true) {
            if (invoked == false){
                func.apply(prevScope, prev)
                invoked = true
            }
            clearTimeout(timer)

            timer = setTimeout(() => {
                invoked = false
            }, wait)

            return 
        }

        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(prevScope, prev)
        }, wait)
    }
}

const log2 = debounce(() => console.log("Hello!"), 1000);

log2();
log2();
log2();

const log = opDebounce(() => console.log("Hi!"), 1000, { leading: false });

log()
log()