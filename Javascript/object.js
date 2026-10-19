// Microsoft Interview Question using Object nesting and Recursion
//Problem
let user={
    name:"Prince",
    address:{
        personal:{
            city:"xyz",
            area:"abc"
        },
        office:{
            city:"i don't know",
            area:{
                landmark:"not available"
            }
        }
    }
}

// output
let final={
    user_name:"Prince",
    user_address_personal_city:"xyz",
    user_address_personal_area:"abc",
    user_address_office_city:"i don't know",
    user_address_office_area_landmark:"not available"
}

let final_obj={};

let magic=(user,parent)=>{
    for(let key in user){
        if(typeof user[key]==='object'&&user[key]!==null){
            // recursive nesting
            magic(user[key],parent+"_"+key);
        }
        else{
            // add the conversion of user[key] into the final object
            final_obj[parent+"_"+key]=user[key];
        }
    }
}
magic(user,"user");
console.log(final_obj);


