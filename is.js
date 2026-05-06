 is. num = function(num) {
        if (typeof num == 'number'){
            return true
        }
        return false
    }
    is.nan = function(num) {
        if (Number.isNaN(num)){
            return true
        }
        return false
    }
    is.str = function(str){
        if (typeof str == "string"){
            return true
        }
        return false
    }
    is.bool = function(bool){
        if (typeof bool == "boolean"){
            return true
        }
        return false
    }
    is.undef = function(undef){
        if (typeof undef == "undefined"){
            return true
        }
        return false
    }
    is.def = function(def){
        if (typeof def !== "undefined") {
            return true
        }
        return false
    }
    is.arr = function(arr){
        if (Array.isArray(arr)){
            return true
        }
        return false
    }
    is.obj = function(obj){
        if (typeof obj == "object" && !Array.isArray(obj) && obj !== null) {
            return true
        }
        return false
    },
    is.fun = function(fun){
        if (typeof fun == "function"){
            return true
        }
        return false
    }
    is.truthy = function(truthy){
        if (truthy){
            return true
        }
        return false
    },
    is.falsy = function(falsy) {
        if (!falsy){
            return true
        }
        return false
}