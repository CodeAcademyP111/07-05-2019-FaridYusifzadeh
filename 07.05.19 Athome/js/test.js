
var eded = prompt("ededi daxil edin");
if(eded!= Number){
    alert("reqem daxil edin");
}

eded = eded.toString()
num = eded.length
console.log(eded, "-in : ", num, "sayda mertebesi var")




var x = prompt("Sozu daxil edin");
var y = prompt("neceye vurulsun");


function test(soz, repeatnum) {
    var word = ""
    for(var i = 0; i < repeatnum; i++){
        word += soz;
    }
    console.log(word)
}

test(x,y)