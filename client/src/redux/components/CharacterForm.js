import React, { useState } from 'react'
import ("../../styles/createC.css") 

export default function CharacterForm({ allEpisodes, handleChange, handleSubmit }) {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const
  [origin, setOrigin] = useState('')
  const [image, setImage] = useState('')
  const [epId, setEpId] = useState('')
  const payload = {
    name: name,
    status: status,
    species: species,
    origin: origin,
    image: image,
    epId: epId
    
  }
  console.log(payload)
  return (
    <form onSubmit={(e) => handleSubmit(e, payload)}>

      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          className='form-control'
          id='name'
          placeholder='Enter name'
          onChange={(e) => handleChange(e, setName)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='status'>Status</label>
        <select className='form-control' id='status' onChange={(e) => handleChange(e, setStatus)}>
          <option value=''>Select status</option>
          <option value='Alive'>Alive</option>
          <option value='Dead'>Dead</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor='species'>Species</label>
        <select className='form-control' id='species' onChange={(e) => handleChange(e, setSpecies)}>
          <option value=''>Select species</option>
          <option value='Human'>Human</option>
          <option value='Alien'>Alien</option>
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor='origin'>Origin</label>
        <input type='text' className='form-control' id='origin' placeholder='Enter origin' onChange={(e) => handleChange(e, setOrigin)} />
      </div>
      <div className='form-group'>

        <label htmlFor='epId'>Episode</label>
        <select className='form-control' id='epId' onChange={(e) => handleChange(e, setEpId)}>
          <option value=''>Select episode</option>
          {allEpisodes.map((ep) => (
            <option key={ep.id} value={ep.id}>

              {ep.name} 
            </option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor='image'>Image</label>
        <input type='text' className='form-control' id='image' placeholder='Enter image' onChange={(e) => handleChange(e, setImage)} />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}