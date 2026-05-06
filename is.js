const is = {
    num: function(num) {
        if (isNaN(num)){
            return false

        }
        if (typeof num == 'number' && num != NaN){
            return true
        }
        return false
    },
    nan: function(num) {
        if (isNaN(num) && typeof num !== "string"){
            return true
        }
        return false
    },
    str: function(str){
        if (typeof str == "string"){
            return true
        }
        return false
    },
    bool: function(bool){
        if (typeof bool == "boolean"){
            return true
        }
        return false
    },
    undef: function(undef){
        if (typeof undef == "undefined"){
            return true
        }
        return false
    },
    def: function(def){
        if (typeof def !== "undefined") {
            return true
        }
        return false
    },
    arr: function(arr){
        if (Array.isArray(arr)){
            return true
        }
        return false
    },
    obj: function(obj){
        if (typeof obj == "object" && !Array.isArray(obj) || obj == null) {
            return true
        }
        return false
    },
    fun: function(fun){
        if (typeof fun == "function"){
            return true
        }
        return false
    },
    truthy: function(truthy){
        if (truthy){
            return true
        }
        return false
    },
    falsy: function(falsy) {
        if (!falsy){
            return true
        }
        return false
    }

}