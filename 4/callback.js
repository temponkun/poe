var test = function yes(data){
    console.log("hey!"+data);
}

var test2 = function hi(callback){
    callback(' oh hey');
}

test2(test);