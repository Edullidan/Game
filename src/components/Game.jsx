import React, { useState } from 'react'
import styled from 'styled-components'
import Board from './Board'
import calculateWinner from '/Hellper'



const Wrapper = styled.div`
    min-height: 100vh
     width:100%;
     background: #222222;
     display:flex;
     justify-content:center;
     align-items:center;
     flex-direction" column;
    `



export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    return (
        <Wrapper>
            <Board squares={board}></Board>
        </Wrapper>
    )
}
