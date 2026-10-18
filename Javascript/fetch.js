console.log("Start");
setTimeout(()=>{
    console.log("timeout");
},5000)
fetch("https://api.github.com/users/princechaudhary07")
.then(function cb(){
    console.log("api fetched");
})
console.log("End");
let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<startDate+10000){
    endDate=new Date().getTime();
}
console.log("While expires");