const cart=["pants","shoes","kurta"];
api.createOrder(cart,function(orderId){
    api.proceedTopayment();
})