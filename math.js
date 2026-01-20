function  add(a,b){
    return a+b;
}

function remove(a,b){
    return b-a;
}

function area(r){
    return 3.14*r*r;
}
function logActivity(message){
    return "Logged in"+new Date().toLocaleString();
}
module.exports={add,remove,area,logActivity};