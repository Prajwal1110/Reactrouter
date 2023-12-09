import React from 'react'
import {Link, useNavigate} from 'react-router-dom' 
function Home() {
    const navigate= useNavigate()
    function gotoAbout(){
          navigate("/about")
    }
  return (

    <>
    <div>This is Home Page</div>
     {/* <Link to="/about">About</Link> */}
     <button onClick={gotoAbout}>About</button>
    </> 
  )
}

export default Home