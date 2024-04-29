//Example of Async Programming
/*console.log("Welcome to Async Programming")
setTimeout(()=>{
    console.log("Welcome")
},5000)
setInterval(()=>{
    console.log("Hai")
},2000)

let array=[1,2,3,4,5]
array.forEach((e)=>{
    console.log(e)
})
const filtereddata=array.filter((e)=>e%2===0)
console.log(filtereddata)

//Example of callback function
function display(value){
    console.log(value)
}
function add(a,b,display){
    display(a+b)

}
add(10,5,display)*/

/*let values=[1,2,3,4,5]

function foreachown(values,callback)
{
    for(let i=0;i<values.length;i++)
    {
        callback(values[i])
    }
}
foreachown(values,(e)=>{
    console.log("callback "+e)
})

values.forEach((e)=>{
    console.log("forEach "+e)
})*/
//--------------------------------------Asynchronous---------------------------------------------//
//settimeout- Synchronous way
setTimeout(()=>{
    console.log("callback 1")
    setTimeout(()=>{
        console.log("callback 2")
    setTimeout(()=>{
        console.log("callback 3")
        setTimeout(()=>{
            console.log("callback 4")
            setTimeout(()=>{
                console.log("callback 5")
                setTimeout(()=>{
                    console.log("callback 6")
                    setTimeout(()=>{
                        console.log("callback 7")
                        setTimeout(()=>{
                            console.log("callback 8")
                            setTimeout(()=>{
                                console.log("callback 9")
                                setTimeout(()=>{
                                    console.log("callback 10")
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
  },1000)
},1000)

//synchronous way
setTimeout(()=>{
    console.log("callbackhell 1")
    setTimeout(()=>{
        console.log("callbackhell 2")
    setTimeout(()=>{
        console.log("callbackhell 3")
        setTimeout(()=>{
            console.log("callbackhell 4")
            setTimeout(()=>{
                console.log("callbackhell 5")
                setTimeout(()=>{
                    console.log("callbackhell 6")
                    setTimeout(()=>{
                        console.log("callbackhell 7")
                        setTimeout(()=>{
                            console.log("callbackhell 8")
                            setTimeout(()=>{
                                console.log("callbackhell 9")
                                setTimeout(()=>{
                                    console.log("callbackhell 10")
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
  },1000)
},1000)


//settimeout-Asynchronous way
/*setTimeout(()=>{
    console.log("callback 1")
},1000)
setTimeout(()=>{
    console.log("callback 2")
},1000)
setTimeout(()=>{
    console.log("callback 3")
},1000)*/