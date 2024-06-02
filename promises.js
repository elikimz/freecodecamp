let stocks={
    Fruits:["bananas","mangoes","ovacado","pineaples","apple"],
    Liquid:["ice","water"],
    Holder:["cup","mug"],
    toppings:["chocolate","peanuts"]

};
let is_shop_open=true;
let order=(time,work)=>{
    return new Promise ((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{ resolve(work())},time)
           
        }
        else{
            reject(console.log("our shop is closed"))
        }
    })

};
order(2000,()=>console.log(`${stocks.Fruits[4]} was selected`))

.then(()=>{
    return order(1000,()=>console.log("productio has started"))
})
.then(()=>{
    return order(2000,()=>console.log("The fruit was chopped"))
})
.then(()=>{
    return order(1000,()=>console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`))
})
.then(()=>{
    return order(1000,()=>console.log("Start the machine"))
})
.then(()=>{
    return order(2000,()=>console.log(` ice cream was put in a ${stocks.Holder[0]}`))
})
.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} was selected`))
})
.then(()=>{
    return order(2000,()=>console.log("Serve the ice cream"))
})
.catch(()=>{
    console.log("Customer left")
})
.finally(()=>{
    console.log(" Day ended,the shop is closed")
})