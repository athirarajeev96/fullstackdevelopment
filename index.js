/*//Promise Chaining

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1 is resolved after 3 secs")
    },2000)
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise2 is resolved after 2 secs")
    },3000)
})

let promise3 = new Promise((resolve,reject)=>{
    function myFunction(){
        return "Promise3 is rejected"
    }
    reject(myFunction())
})

let promise4 = new Promise((resolve,reject)=>{
    resolve("Promise4 is resolved")
})

let promise5 = new Promise((resolve,reject)=>{
    resolve("Promise5 is resolved")
})


promise1
.then((value)=>{
    console.log(value)

    promise2.then((value)=>{
        console.log(value)

        promise3.then((value)=>{
            console.log(value)

            promise4.then((value)=>{
                console.log(value)

                promise5.then((value)=>{
                    console.log(value)
                    console.log("-----------THE END-------------")            
                })
                .catch((error)=>console.log(error))
            })
            .catch((error)=>console.log(error))
        })
        .catch((error)=>{
            console.log(error)
            promise4.then((value)=>{
                console.log(value)

                promise5.then((value)=>{
                    console.log(value)
                    console.log("-----------THE END-------------")            
                })
                .catch((error)=>console.log(error))
            })
            .catch((error)=>console.log(error))
        })
    })
    .catch((error)=>console.log(error))
})
.catch((error)=>console.log(error))*/


//Async Await
//Rules to write async and wait function
//1.need to give the function as async
//2.Await can be given only inside async function

let promise=new Promise((resolve,reject)=>{
    reject("Welcome to async/await")
})
//promise using then and catch - example 1
/*function display(){
    promise.then(value=>console.log(value))
    .catch(error=>console.error(error))
}
display()
//promise using then and catch - example 2
function display(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(value=>console.log(value))
    .catch(error=>console.error(error))
}
display()*/

//promise using async and await - example 2
/*async function display(){
    try{
        let res=await fetch('https://restcountries.com/v3.1/all')
        let res1=await fetch('https://restcountries.com/v3.1/all')
        let data=await res.json()
        console.log(data)
    }
    catch(error)
    {
    console.error(error)
    }
}
display()*/
async function getWeather(lat,lng){
    const API_KEY = "d7de3ab7efc5ee22fd23f851234ede9b"
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    let res = await fetch(url)
    let data = await res.json()

    //converting kelvin to celcius
    let temp = Math.round(data.main.temp - 273.15)

    alert(`The weather is ${data.weather[0].main} with temprature of ${temp} Celcius`)
}
async function display(){
    try{
        let res = await fetch('https://restcountries.com/v3.1/all')
        let data = await res.json()
        if(data)
        {
            let root = document.getElementById("root")

            data.forEach((e,i)=>{
                let div =  document.createElement("div")
                div.innerHTML = `
                <div class="card" style="width: 18rem;padding: 15px; margin: 10px;">
                    <img src="${e.flags.png}" class="card-img-top" alt="USA">
                    <div class="card-body" style="text-align: center;">
                        <h5 class="card-title">${e.name.common}</h5>
                        <p class="card-text">${e.capital?e.capital[0]:"No Capital"}</p>
                        <button class="btn btn-primary" onClick="getWeather(${e.latlng[0]},${e.latlng[1]})">Get Weather</button>
                    </div>
                </div>`
                root.appendChild(div)
            })
        }
        else
        {

        }
    }
    catch(error)
    {
        console.error(error)
    }
  }

display()