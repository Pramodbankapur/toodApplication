import { useEffect } from "react"
import { SignupForm } from "./components/auth/SignupForm"

function App() {
  useEffect(()=>{
    fetch('http://localhost:5000/api/health')
    .then(res=>res.json())
    .then(data=>console.log('Backend says:',data))
    .catch(err=>console.error(err));
  },[])

  return (
    <>
    <SignupForm/>
    <>
    <h1>Front End is Running...!</h1>
    </>
    </>
  )
}

export default App
