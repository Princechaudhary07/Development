let radius=[2];
const area=function(radius){
    return Math.PI*radius*radius;
}
Array.prototype.calculate=function(area){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(area(this[i]));
    }
    return output;
}
// console.log(calculate(radius,area));
console.log(radius.calculate(area));