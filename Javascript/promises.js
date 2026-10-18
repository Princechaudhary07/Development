// const cart=["pants","shoes","kurta"]

// const promise=createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })

const GITHUB_API="https://api.github.com/users/princechaudhary07";
const user=fetch(GITHUB_API);
console.log(user);
user.then((users)=>{
    console.log(users)
})