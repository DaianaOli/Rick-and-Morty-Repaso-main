import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCharacters } from '../actions'
import Nav from './Nav'
import {BiSearchAlt2} from 'react-icons/bi'
import Filters from './filters';
import ("../../styles/home.css")

export default function Home() {
  let dispatch = useDispatch()
  let characters = useSelector((state) => state.characters)

  useEffect(() => {
    dispatch(getCharacters({}))
  }, [dispatch])

  const paginate = (page) => {
    dispatch(getCharacters({ page }))
  }


  console.log('CHARACTERS', characters)

  return (
    <div className='container-h'>
      <Nav />
      <Filters/>
      <div className='pagination'>
        <button
          className='btn btn-primary'
          onClick={() => paginate()}
          // disabled={characters.info.prev === null}
        >
          Prev
        </button>
        <button
          className='btn btn-primary'
          onClick={() => paginate()}
          // disabled={characters.info.next === null}
        >
          Next
        </button>

      </div>
      <div className='contenedor'>
      {characters.result &&
        characters.result.map((e) => {
          return (
            <div className='card' key={e.id}>
                <div className='card-info' >
                  <h1>{e.name}</h1>
                  <img  src={e.image} alt={e.name} />
                {(() => {
          if (e.status === "Dead") {
            return <div className="badge bg-danger fs-5">{e.status}</div>;
          } else if (e.status === "Alive") {
            return <div className=" badge bg-success fs-5">{e.status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{e.status}</div>;
          }
        })()}
                  <table className='table'>
                    <tbody>
                      <tr>
                        <td>Species:</td>
                        <td>{e.species}</td>
                      </tr>
                      <tr>
                        <td>Origin:</td>
                        <td>{e.origin.name}</td>
                      </tr>
                      <tr>
                        <td>Total episodes:</td>
                        <td>{e.episode.length}</td>
                      </tr>
                      <tr>
                      <td>Location:</td>
                      <td>{e.location.name}</td>
                      </tr>
                    </tbody>
                  </table>

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