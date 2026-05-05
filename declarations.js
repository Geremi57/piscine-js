const escapestr = "`\\/\"'"
const arr = [4, "2"]
const obj = {
    str : "freedom",
    num : 505,
    bool: false,
    undef: undefined
}

const nested = {
    arr : [4, undefined, "2"],
    obj : {
        str: "chains",
        num: 505,
        bool: false,
    }
}

Object.freeze(nested)
Object.freeze(obj)
Object.freeze(arr)