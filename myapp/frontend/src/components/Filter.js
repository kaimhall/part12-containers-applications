import React from 'react'

const Filter = ({ value, handleChange }) => {
  return <>
    Filter shown with
    <input
      id='filter'
      value={value}
      onChange={handleChange}
    />
  </>
}

export default Filter