import React, { Component } from 'react'
import NameInput from './NameInput'

export default class Form extends Component {
  state = {
    name: '',
    email: '', 
    age: '', 
    terms: false, 
    anecdote:'',
  }

  handleInput = ({target}) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [target.name]: value})
  }

  
  render() {
    const {name, email, age, terms, anecdote} = this.state
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <NameInput name={name} handleInput={this.handleInput} />

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleInput}
            />
          </label>

          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              defaultValue=""
              value={age}
              onChange={this.handleInput}
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

        
          <label htmlFor="terms">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                value={terms}
              onChange={this.handleInput}
              />
              Concordo com termos e acordos
            </label>
        

          <label htmlFor="anecdote">
            Anedota:
            <textarea id="anecdote" name="anecdote" value={anecdote}
              onChange={this.handleInput}/>
          </label>

        </form>
      </div>
    );
  }
}
