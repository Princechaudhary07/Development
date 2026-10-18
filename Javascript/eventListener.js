function attachEventListener(){
    let button=document.getElementById("btn")
    let count=0;
    button.addEventListener("click",(e)=>{
    console.log("button clicked",++count);
    e.preventDefault();
    e.stopImmediatePropagation();
    })
}

attachEventListener();