import React from 'react'
const PersonForm = ({ addPerson, name, number, handleNameChange, handleNumberChange }) => {

  return <>
    <form onSubmit={addPerson} >
      <div>
        name:
        <input
          id='username'
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>number:
        <input
          id='number'
          value={number}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit" id='add-button' >add</button>
      </div>
    </form>
  </>
}

export default PersonForm