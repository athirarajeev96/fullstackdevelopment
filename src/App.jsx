/*import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
function App() {
  let [value,setValue]=useState(0);
  return <>
      <Button variant='primary' onClick={()=>{
        setValue(value-1)
        console.log(value);
      }}
      >-</Button>{' '}
      {value}
      <Button variant='danger'onClick={()=>{
        setValue(value+1)
        console.log(value);
      }}
      >+</Button>{' '}//to give space between each button
      <Button variant='info' onClick={()=>{
        setValue(0)}}
      >Reset</Button>{' '}
    </>
}*/

/*function App() {
  let [value,setValue]=useState(0);
  return <>
      <button onClick={()=>{
        setValue(value-1)
        console.log(value);
      }}
      >-</button>
      {value}
      <button onClick={()=>{
        setValue(value+1)
        console.log(value);
      }}
      >+</button>
      <button onClick={()=>{
        setValue(0)}}
      >Reset</button>
    </>
}*/
import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function App() {
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let [output,setOp] = useState("")
  let capturePassword = (e)=>{
      setPassword(e.target.value)
  }

  let handleSubmit = ()=>{
      setOp(`The email is ${email} with password ${password}`)
  }

  let reset = ()=>{
      setOp("")
      setEmail("")
      setPassword("")
  }
return <>
 <Form>
    <Form.Group className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={capturePassword}/>
    </Form.Group>
    <Button variant="primary" onClick={handleSubmit}>
      Submit
    </Button>
    <Button variant="warning" onClick={reset}>Reset</Button>
  </Form>
  <div style={{color:"red"}}>
      {output}
  </div>
</>
}

export default App
