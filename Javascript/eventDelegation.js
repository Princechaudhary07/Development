// document.querySelector("#categories").addEventListener("click",(e)=>{
//     console.log("categories clicked");
//     console.log(e);
//     // window.location.href="/"+e.target.id;
//     if(e.target.tagName=='LI'){
//         window.location.hef="/"+e.target.id;
//         }
// })

document.querySelector("#form").addEventListener('keyup',(e)=>{
    console.log(e);
    if(e.target.dataset.uppercase!=undefined){
        e.target.value=e.target.value.toUpperCase();
    }
})