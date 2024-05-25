import React,{useState} from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
function App() {
  let [cart,setCart] = useState(0)
  let data=[
    {
      item:"Fancy Product",
      price:"",
      finalprice:"$40.00 to $80.00"
    },
    {
      item:"Special Item",
      price:"$20.00",
      finalprice:"$18.00"
    },
    {
      item:"Popular Item",
      price:"",
      finalprice:"$40.00"
    },
    {
      item:"Sale Item",
      price:"$50.00",
      finalprice:"$25.00"
    },
    {
      item:"Sale Item",
      price:"$50.00",
      finalprice:"$25.00"
    },
    {
      item:"Fancy Product",
      price:"",
      finalprice:"$40.00 to $80.00"
    },
    {
      item:"Special Item",
      price:"$20.00",
      finalprice:"$18.00"
    },
    {
      item:"Popular Item",
      price:"",
      finalprice:"$40.00"
    }
  ]
  return<>
      <NavBar cart={cart}/>
      <Header/>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                  data.map((e,i)=>{
                    return <Card data={e} key={i} setCart={setCart}/>
                  })
                }
                </div>
            </div>
      </section>
      <Footer/>
  </>
}

export default App