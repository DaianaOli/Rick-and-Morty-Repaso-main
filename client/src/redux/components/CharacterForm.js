import React, { useState } from 'react'
import ("../../styles/createC.css") 

export default function CharacterForm({ allEpisodes, handleChange, handleSubmit }) {
  let [name, setName] = useState('')
  let [image, setImage] = useState('')
  let [status, setStatus] = useState('')
  let [episode, setEpisode] = useState('')

  return (
    <div className='form'>
      <h2>CREATE  A  CHARACTER</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          name='name'
          value={name}
          onChange={(e) => handleChange(e, setName)}
        />

        <label htmlFor='image'>Image URL:</label>
        <input
          name='image'
          value={image}
          onChange={(e) => handleChange(e, setImage)}
        />

        <p>Status:</p>
        <div onChange={(e) => handleChange(e, setStatus)}>
          <input name='status' value='Alive' type='radio' />
          <label htmlFor='Alive'>Alive</label>
          <input name='status' value='Dead' type='radio' />
          <label htmlFor='Dead'>Dead</label>
          <input name='status' value='Unknown' type='radio' />
          <label htmlFor='Unknown'>Unknown</label>
        </div>
        <div className='epi'>Episodes:
        <select className='select' value={episode} onChange={(e) => handleChange(e, setEpisode)}>
          <option disabled>Select episodes...</option>
          {allEpisodes &&
            allEpisodes.map((ep) => {
              return (
                <option key={ep.id} value={ep.id}>
                  {ep.name}
                </option>
              )
            })}
        </select>
        </div>
        <button className='button' type='submit'>Create</button>
      </form>
    </div>
  )
}