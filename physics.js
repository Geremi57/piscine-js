function checkArgs(arg1, arg2){
    if (arg1 == "F" && arg2 == "m"){
        return true
    }else if (arg1 == "Δv" && arg2 == "Δt"){
        return true
    }else if (arg1 == "d" && arg2 == "t") {
        return true
    }else{
        return false
    }
}


const getAcceleration =  function(obj){
    if(obj.f && obj.m) {
        return obj.f / obj.m
    }
    else if(obj.Δv && obj.Δt){
        return obj.Δv/obj.Δt
    }else if(obj.d && obj.t){
        return 2*(obj.d)/(obj.t*obj.t)
    }
    return "impossible"
}
