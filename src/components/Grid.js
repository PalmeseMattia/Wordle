import React from 'react'
import Line from './Line'
import './Grid.css'

export default function Grid({ lines }) {
    const linesToRender = new Array(lines).fill('')
    
    return (
        <div className='grid'>
            {linesToRender.map((line, i) => (
                <Line key={i}
                      tiles={lines}/>
            ))}
        </div>
    )
}
