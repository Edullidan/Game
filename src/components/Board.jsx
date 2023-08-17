import React from 'react'
import styled from 'styled-components'
import Square from './Square'

const Table = styled.div`
 width:300px;
 height:300px;
 background: red;
 display:flex;
 flex-wrap: wrap;
`

export default function Board() {
    return (
        <Table>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </Table>
    )
}
