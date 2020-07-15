import React from 'react'
import styled from 'styled-components'


const BoxWrapperContent = styled.div`
flex-basis: 30%;
padding: 16px;
margin: 8px 0;
box-shadow: ${props => props.theme.shadows.boxShadow};
background: ${props => props.theme.colors.white};
border-radius: 16px;
width: 30%;
@media(max-width:${props => props.theme.breakpoints.l}){
    flex-basis: 45%;
    width: 45%;
}
@media(max-width:${props => props.theme.breakpoints.m}){
    flex-basis: 100%;
    width: 100%;
    
}
`

function BoxWrapper(props) {
    const { children } = props

    return (
        <BoxWrapperContent>
            {children}
        </BoxWrapperContent>
            
    )
}
export default BoxWrapper