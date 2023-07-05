import React, { useState } from 'react';
import messagesList from './data/messagesList'
import Emails from "./Emails"

function App() {
console.log(messagesList)
  const [messages, setMessages] = useState(messagesList);
  return (
    <main style={{display:'flex', flexDirection:'column', alignItems: 'center', gap:'1rem', width:'100vw', height:'100vh'}}>
      <h1>TrybeMail</h1>
      <div>
        <button>Marcar todas como lida</button>
        <button>Marcar todas como não lida</button>
      </div>
      <Emails messages={messages} />
    </main>
  )
}

export default App

//Finalizar exercício: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/095ebb0d-1932-4d37-933b-9e1d721646fb/section/94fad02a-cf1d-4277-871d-1553af1aded4/day/8afaccae-ee94-4334-9d10-2f51359f061f/lesson/5ad1b2c3-87e8-4857-a939-84c121b176e3
