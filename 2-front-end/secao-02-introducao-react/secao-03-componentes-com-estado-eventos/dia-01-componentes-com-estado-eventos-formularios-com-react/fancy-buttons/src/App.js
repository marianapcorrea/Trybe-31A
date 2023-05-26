import React, { Component } from 'react'

 const handleClick1 = () => console.log(`Botão 1`)
 
 export default class App extends Component {
  constructor() {
    super() 
    this.handleClick2 = this.handleClick2.bind(this)
  }

  state = {
    clicks : 0,
    backgroundColor: 'green'
  }
  handleClickCount = () => {
    console.log(this)
    this.setState((initialState, _props) => ({
      clicks : initialState.clicks + 1
    }))
  }

  getColor =(num) => num %2 === 0 ? "green" : "white" 
  
  
  handleClick2 () {
    console.log(`Botão 2`)
  }
  handleClick3 = () =>  console.log(`Botão 3`)
   render() {
    const {clicks} = this.state
     return (
      <div>
        <button onClick={handleClick1} >Botão 1</button>
        <button onClick={this.handleClick2}>Botão 2</button>
        <button onClick={this.handleClick3}>Botão 3</button>
        <button onClick={this.handleClickCount} style={ {backgroundColor: this.getColor(clicks)}}>Clicks: {clicks}</button>
      </div>
    )
  }
}
