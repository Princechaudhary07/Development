const cart=["shoes","pants","kurta"];
api.createOrder(cart,function(orderId){
    api.proceedToPayment(function(paymentinfo){
        api.showOrderSummary(function(orderRecipt){
            api.shipOrder();
        })
    })
})