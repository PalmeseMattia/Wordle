import React from 'react'
import Tile from './Tile'

export default function Line({ tiles }) {
    const tilesToRender = new Array(tiles).fill('')
    
    return (
        <div className='line'>
            {tilesToRender.map((tile,i) => (
                <Tile key={i}/>
            ))}
        </div>
    )
}
