const cart=["pants","kurta","shoes"]

const promise=createOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(){
    const pr=new Promise((resolve,reject)=>{
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)){
            const err=new Error("Cart is empty");
            reject(err);

        }
        const orderId="12345";
        if(orderId){
            resolve(orderId);
        }
    })
    return pr;
}

function validateCart(cart){
    if(cart.length===0){
        return false;
    }
    return true;
}