const get = function(src, path){
    const fin = path.split('.').reduce((acc, part) => acc?.[part], src); 
    return fin
}
