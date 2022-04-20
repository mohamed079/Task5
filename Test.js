function Select (string , option){
    if(option === "swappingCase"){
let sw = string.split("").map(function (element) {
 return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()

}).join("")
console.log(`final result is ${sw}`);

    }
    if(option === "ignorNumber"){
let ign = string.split("").map(function(element){
  return isNaN(parseInt(element))?element:"";

}).join("")
console.log(`final result is ${ign}`); 

    }
    if(option === "invertedNumbers"){
    let inv = string.split(',').map(function(element){
      return -element;

    }).join(',')
    console.log(`final result is ${inv}`);

    }else{

        console.log("ERROR");
    }
}












