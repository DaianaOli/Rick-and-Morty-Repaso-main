import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCharacters } from '../actions'
import Nav from './Nav'
import {BiSearchAlt2} from 'react-icons/bi'
import ("../../styles/home.css")

export default function Home() {
  let dispatch = useDispatch()
  let characters = useSelector((state) => state.characters)

  useEffect(() => {
    dispatch(getCharacters({}))
  }, [dispatch])

  console.log('CHARACTERS', characters)

  return (
    <div className='container-h'>
      <Nav />
      <div className='contenedor'>
      {characters.result &&
        characters.result.map((e) => {
          return (
            <div className='card' key={e.id}>
                <div className="dropdown">
                  <h1>{e.name}</h1>
                  <div className="dropdown-content">
                <Link to= {`/characters/${e.id}`}>
                    <p>Click for more details!<BiSearchAlt2/> </p>
                </Link>
                  </div>
                </div>
                <div className='card-info' >
                {(() => {
          if (e.status === "Dead") {
            return <div className="badge bg-danger fs-5">{e.status}</div>;
          } else if (e.status === "Alive") {
            return <div className=" badge bg-success fs-5">{e.status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{e.status}</div>;
          }
        })()}
                  <img  src={e.image} alt={e.name} />
                  <p>Specie: {e.species}</p>
                  <p>Origin : {e.origin.name}</p>
                  {/* <p>Location: {e.location.name}</p>
                  <p>Status: {e.status}</p> */}
                </div>
                <div className='episodes'>
                <h3>Episodes
                  <select>{e.episode.map((e)=>{
                    return <option >{e}</option>})}
                  </select>
                </h3>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}