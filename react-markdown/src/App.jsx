import { useState } from 'react'
import { Remarkable } from 'remarkable'
import './App.css'

const md = new Remarkable()
function App() {
 const [markdown, setMarkdown] = useState("# Markdown Preview")
  return (
    <>
        <h1>Markdown Editor</h1>
      <section className="mark-down">
        <textarea className='input' value={markdown} onChange={(e)=> setMarkdown(e.target.value)} ></textarea>
        <article className='resault' dangerouslySetInnerHTML={{__html: md. 
        render(markdown)}}>
       
        </article>
      </section>
    </>
  )
}

export default App
