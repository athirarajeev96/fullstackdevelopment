/*import React from 'react'

function App() {
  let name=["Athira S","Rajeev", "muthu", "kuttu"]
  return <>
  {
  name.map((e,i)=>{
  return <h1 key={i}>"Welcome {e} to React day 2"</h1>
  })
}
  </>
}

export default App*/
/*import React from 'react'
function App() {
  let data=[
    {
      title: "Project One",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod",
      imgageURL:"https://via.placeholder.com/700x400"
    },
    {
      title: "Project Two",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod",
      imgageURL:"https://via.placeholder.com/700x400"
    },
    {
      title: "Project Three",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod",
      imgageURL:"https://via.placeholder.com/700x400"
    }
  ]
  return <>
<div className="container">
<h1 className="my-4">Reusable components</h1>
  <div className="row">
  {
    data.map((e,i)=>{
        return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src={e.imageURL} alt={e.title}/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{e.title}</a>
            </h4>
            <p className="card-text">{e.description}</p>
          </div>
        </div>
      </div>
    })
  }
</div>
</div>
</>
}
export default App*/
import React from 'react'
function App() {
  let data=[
    {
      title: "Heavens Gate China",
      description:"ianmen Mountain (simplified Chinese: 天门山; traditional Chinese: 天門山; pinyin: Tiānmén Shān; lit. 'Heaven's Gate Mountain') is a mountain located within Tianmen Mountain National Park, Zhangjiajie, in the northwestern part of Hunan Province, China",
      imageURL:"https://www.travelandleisure.com/thmb/uHmJJ2iSWw9uelHUBuqsr_53CGY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gate-of-heaven-tianmen-mountain-china-HEAVENGATE1117-0866515910984beaa8d00ff8609189b3.jpg"
    },
    {
      title: "Sky",
      description:"The sky is an unobstructed view upward from the surface of the Earth. It includes the atmosphere and outer space. It may also be considered a place between the ground and outer space, thus distinct from outer space.",
      imageURL:"https://upload.wikimedia.org/wikipedia/commons/4/4b/Sky-2.jpg"
    },
    {
      title: "Apple",
      description:"Apple Inc. (formerly Apple Computer, Inc.) is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software,",
      imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWHz9eesTmury7LSBOe4wDXBMImbkOpFkYYoNvgCbuA&s"
    }
  ]
  return <>
<div className="container">

{/* <!-- Page Heading --> */}
<h1 className="my-4">Reusable components</h1>
  <div className="row">
  {
    data.map((e,i)=>{
        return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src={e.imageURL} alt={e.title} height={"200px"} width={"200px"}/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{e.title}</a>
            </h4>
            <p className="card-text">{e.description}</p>
          </div>
        </div>
      </div>
    })
  }
</div>
</div>
</>
}
export default App

