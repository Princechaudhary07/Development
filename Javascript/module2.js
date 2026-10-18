// const dummy=require('./module1');
// const {subtract}=require('./module1');
// console.log(dummy(2,3));
// console.log(subtract(3,2));

// const {add}=require('./module1')
// const {sub}=require('./module1')
// import sum from './module1.js';
// console.log(sum(2,5));
// console.log(add(2,3));
// console.log(sub(3,1));

import division, {multiply} from './module1.js'
console.log(multiply(2,3));
console.log(division(2,1));

// module caching
delete require.cache[require.resolve('./module1.js')]