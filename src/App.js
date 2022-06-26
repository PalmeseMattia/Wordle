import React, { useState } from 'react'
import './App.css'
import Grid from './components/Grid';
const GUESSES_NUMBER = 6;

export default function App() {
  const [solution, setSolution] = useState('WORLD')
  const [guesses, setGuesses] = useState(new Array(GUESSES_NUMBER))
  
  return (
    <div className='app fs-3'>
      <Grid lines={GUESSES_NUMBER}/>
    </div>
  )
}
