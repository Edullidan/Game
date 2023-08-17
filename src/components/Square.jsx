import React from 'react'
import styled from 'styled-components'

const Click = styled.button`
width:100px;
 height:100px;
 background: #fff;
 border : 1px solid #222222;
 cursor: pointer;
 outline:none;
 font-size: 60px;
 display:flex;
 justify-content:center;
 align-items: center
  &:hover{
    background: #f0f0f0;
    transtition: .3s all ease
  }
`

export default function Square() {
    return (
        <Click>x</Click>
    )
}
