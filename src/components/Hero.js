import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';


const HeroSection = styled.section`
width: 100vw;
height: 100vh;
background: url(${require("../assets/hero.jpg")}) no-repeat center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
@media(max-width: ${props =>props.theme.breakpoints.m}){
    background: ${props => props.theme.colors.background}
}
`
const Title = styled.h1({
    textAlign: "center",
    margin: "0px",
    paddingTop:"100px"
})
const TypeWriterText = styled.h5({

})


const StyledIcon = styled.i({
    fontSize: "5rem",
    paddingTop: "1rem",
    animation: "bounce 2s infinite "
})

function Hero() {


    return (
        <HeroSection>
            <Title>Veebster</Title>
            <TypeWriterText><Typewriter
                options={{
                    strings: ['Kvaliteetsed veebilehed', 'Mõistlikud hinnad', "Isiklik lähenemine", "Kiire töö"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }}
            /></TypeWriterText>
            <a href="#about"><StyledIcon className={"material-icons"}>arrow_circle_down</StyledIcon></a>
        </HeroSection>
    )
}
export default Hero