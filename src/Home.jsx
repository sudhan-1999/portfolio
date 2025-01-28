import React from 'react'
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div>
        I'm a{" "}
        <ReactTyped 
        strings={[
            'Full Stack Developer',
            'Frontend Developer',
            'Backend Developer'
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop/>
    </div>
  )
}

export default Home