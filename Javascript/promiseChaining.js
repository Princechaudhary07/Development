const cart=["kurta","shoes","pants"]

createOrder(cart)
.then((orderId)=> proceedToPayment(orderId))
.catch(function(err){
    console.log(err.message);
})
.then((paymentInfo)=>showOrderSummary(paymentInfo))
.then((orderSummary)=>updateWalletBalance(orderSummary))
.catch(function(err){
    console.log(err.message);
})
.then(function(){
    console.log("No matter what i will always run")
})
