const validator = (servers) =>{
    let error ="";
    var arrayConstructor = [].constructor;
    if(servers.constructor !== arrayConstructor){
        error = "Input must be array of server objects";
        return error;
    }
    if(servers.length === 0){
        error = "Input must contains atleast one object";
        return error;
    }
    return error;
}

module.exports = validator;