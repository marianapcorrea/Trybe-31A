import React from "react"

function Emails({messages}) {

  

  return (
      <ul>
      {messages.map((message) => (
        <li key={ message.id }>
          <p>
            {message.title}
          </p>
          <div>
            <button >Lida</button>
            <button>Não lida</button>
          </div>
        </li>
      ))}
    </ul>
    
  )
}

export default Emails