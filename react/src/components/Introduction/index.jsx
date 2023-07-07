import React from 'react'

export default function Introduction({age, firstName , isMan=true , isOnline= false}) {
  return (
    <div className='container'>
        <h1>Salam {firstName}, I'm {age} years old</h1>
        <p>gender {isMan? "🤠" : "🤷‍♀️"}</p>
        {
            isOnline && <p style={{width:20 , height:20 , background:"green", borderRadius:"50%"}}></p>
        }
    </div>
  )
}
