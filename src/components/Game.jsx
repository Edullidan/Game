import React, { useState } from 'react'
import styled from 'styled-components'
import Board from './Board'
import calculateWinner from '../hellper'



const Wrapper = styled.div`
     
     
    height:100vh;
     background: #222222;
     display:flex;
     justify-content:center;
     align-items:center;
     flex-direction" column;
    `
const StyledButt = styled.button`
      width:200px;
      height:35px;
      margin-bottom:10px;
      cursor:pointer;
      color:white;
      outline: none;
      background: #222222;
      border: 1px solid white
      &:hover{
        background:white;
        color:#222222;
        transtition: .3s all ease;
      }
`

const StyledP = styled.p`
  margin-top:5px;
  font-size: 36px;
  color: white;
`


export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? 'x' : '0'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <StyledButt onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</StyledButt>
        )
    }

    return (
        <Wrapper>
            {startNewGame()}
            <Board squares={board} click={handleClick}></Board>
            <StyledP>
                {winner ? 'Победитель' + winner : 'Сейчас ходит' + (xIsNext ? 'X' : '0')}
            </StyledP>
        </Wrapper>
    )
}
