
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './redux/components/Home'
import LandingPage from './redux/components/langingPage'
import CreateCharacter from './redux/components/CreateCharacter'
import CharacterId from './redux/components/CharacterId'
import About from './redux/components/About'
import ("../src/styles/App.css")

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/characters' component={Home} />
      <Route exact path='/characters/create' component={CreateCharacter} />
      <Route exact path='/about' component={About} />
      <Route exact path='/characters/:id' component={CharacterId} />
    </div>
  )
}

export default App