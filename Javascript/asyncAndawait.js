const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved");
    },5000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved");
    },5000)
})
async function handlePromise() {
    const val=await p1;
    console.log("namaste");
    console.log(val);
    const val2=await p2;
    console.log("namaste");
    console.log(val);
    
    
}
handlePromise();

const API_URL="https://api.github.com/users/princechaudhary07";
async function handle(){
    try{
        const data=await fetch(API_URL);
        const jsonValue= await data.json();
        console.log(jsonValue);
    }
    catch(err){
        console.log(err);
    }
    
}
handle().catch((err)=>console.error(err));