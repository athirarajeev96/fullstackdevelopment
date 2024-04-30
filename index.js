/*let mypromise=new Promise((resolve,reject)=>{
    resolve("This is success")
    //reject("This is failed")
})
mypromise
.then((value)=>console.log(`resolved -${value}`))
.catch((error)=>console.log(`rejected-${error}`))
.finally(()=>console.log("Finally will always execute"))*/

//Multiple process running at the same time - Asynchronous
/*let promise1=new Promise((resolve,reject)=>{
    console.log("The promise is in pending state")
    setTimeout(()=>{
        resolve(10)
    },5000)
})

promise1
.then((value)=>{
console.log(`resolved - ${value}`)
promise2
.then((value)=>console.log(`inner resolved - ${value}`))
.catch((error)=>console.log(`inner resolved-${error}`))
})
.catch((error)=>console.log(`resolved-${error}`))

let promise2=new Promise((resolve,reject)=>{
    console.log("The promise is in pending state")
    setTimeout(()=>{
        resolve(20)
    },2000)
})


promise2
.then((value)=>console.log(`outer resolved - ${value}`))
.catch((error)=>console.log(`outer resolved-${error}`))*/

/*let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1 is resolved adter 5secs")
    },5000)
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise2 is rejected")
    },3000)
})

let promise3=new Promise((resolve,reject)=>{
        reject("Promise3 is resolved")
})

let promise4=new Promise((resolve,reject)=>{
    resolve("Promise4 is resolved")
})

let promise5=new Promise((resolve,reject)=>{
    reject("Promise5 is resolved")
})

/*Promise
.all([promise1,promise2,promise3,promise4,promise5])
.then((value)=>console.log(value))
.catch((error)=>console.log(error))*/

/*Promise
.any([promise1,promise2,promise3,promise4,promise5])
.then((value)=>console.log(value))
.catch((error)=>console.log(error))*/

/*Promise
.race([promise1,promise2,promise3,promise4,promise5])
.then((value)=>console.log(value))
.catch((error)=>console.log(error))*/

/*fetch("https://restcountries.com/v3.1/all",{
    method: "GET",
    "Content-Type": "application/json"
})
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))*/

//return as a promise along with status, but using this data is difficult
/*fetch("https://restcountries.com/v3.1/all",{
    method: "GET",
    "Content-Type": "application/json"
})
.then((res)=>{
    let data=res.json()
    console.log(data)
})
.catch((error)=>console.log(error))*/

//return in readable format
/*fetch("https://restcountries.com/v3.1/all",{
    method: "GET",
    "Content-Type": "application/json"
})
.then((res)=>{
    return res.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))*/




/*fetch("https://restcountries.com/v3.1/ll")
.then((res)=>res.json())
.then((data)=>{
    data.forEach((e)=>{
        console.log(e.name.common)
    })
})
.catch(error=>console.log(error))*/

//display error msg as response
fetch("https://restcountries.com/v3.1/ll")
.then((res)=>{
    if(res.status===200)
    {
        return res.json()
    }
    else
    {
        console.log(res.status)
        console.log(res.StatusText)
        let h1=document.createElement("h1")
        h1.innerText=res.status+" "+res.statusText
        document.body.append(h1)
    }

})
.then((data)=>{
    data.forEach((e)=>{
        console.log(e.name.common)
    })
})
.catch(error=>console.log(error))


























