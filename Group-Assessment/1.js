saved = "[";
var a =1,b =2,ccc;

let new_object = {
	a:a,
	b:b,
	ccc:ccc
}

console.log(getLength(new_object));

length = getLength(new_object);

for(var j=0;j<length-1;j++){
	saved+=JSON.stringify(new_object[j],null,4)+",";
}
saved+=new_object[length-1],null,4+"]";
console.log(saved);

function getLength(object) {
    var count = 0;
    for (var i in object) count++;
    return count;
}
