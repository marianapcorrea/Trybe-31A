import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class NameInput extends Component {
  render() {
    const { name, handleInput } = this.props
    return (
    
      <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleInput}
            />
          </label>
    
    )
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};