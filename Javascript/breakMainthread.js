console.log("Start");
setTimeout(function(){
    console.log("CallBack");
},5000);
console.log("End");
//million line of code
let startDate=new Date().getTime();
let endDate=startDate;
while(startDate<endDate+10000){
    endDate=new Date().getTime();
}
console.log("while expires");