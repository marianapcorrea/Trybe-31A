import React, { Component } from 'react'

export default class User extends Component {
state = {
data: {},
loading: true
} 

   componentDidMount()  {
    this.fetchAPI()
  }

  shouldComponentUpdate(_nextProps, nextState) {
   return nextState.data.registered.age < 50 && true;
  }

  fetchAPI = async () => { 
    const response = await fetch('https://api.randomuser.me/')
    const data = await response.json()
    this.setState({data: data.results[0], loading: false})
  }
  render() {
    const { data, loading} = this.state
    const {name, email, picture, registered} = data
    return (
      <>
      {loading ?
      <p>Loading...</p>
      : 
        <main>
        <img alt={`${name.first}, ${name.last}`} src={picture.large}/>
        <h1>Name: {`${name.first}, ${name.last}`}</h1>
        <h2>E-mail: {email}</h2>
        <h2>idade: {registered.age}</h2>
      </main>
      }
      </>
    
    )
  }
}
