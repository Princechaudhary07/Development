const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 resolved"))
},3000)

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 resolved"))
},1000)

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p3 resolved"))
},2000)

Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch(function(err){
    console.log(err);

});
Promise.any([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>{
    console.error(err);
    console.log(err.errors);

})
// Promise.allSettled([p1,p2,p3])
// Promise.race([p1,p2,p3])
    
