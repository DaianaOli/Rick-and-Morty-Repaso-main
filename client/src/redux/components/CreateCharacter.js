import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getEpisodes, postCharacter } from '../actions'
import CharacterForm from './CharacterForm'
import {Link} from 'react-router-dom'

export default function CreateCharacter() {
  return (
    <div>
    <CharacterForm />
    <Link to='/characters'>
    <button className='button'>Back</button>
    </Link>
    </div>
    )
    

  // const dispatch = useDispatch()
  // const allEpisodes = useSelector((state) => state.episodes)

  // useEffect(() => {
  //   dispatch(getEpisodes())
  // }, [dispatch])

  // function handleChange(event, setstate) {
  //   setstate(event.target.value)
  // }

  // function handleSubmit(event, payload){
  //   event.preventDefault()
  //   dispatch(postCharacter(payload))
  // }
  // return (
  //   <div className='contenedorF'>
  //   <div className='form'>
  //   <Link to='/characters'>
  //   <button className='button'>Back</button>
  //   </Link>
  //     <h2>FORMULARIO DE CREACION</h2>
  //     <CharacterForm allEpisodes={allEpisodes} handleChange={handleChange} handleSubmit={handleSubmit} />
  //   </div>
  //   </div>
  // )
}