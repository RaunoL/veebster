import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

const HeroSection = styled.section({
    width: "100vw",
    height: "100vh",
    background: `url(${require("../assets/hero.jpg")})  no-repeat  center`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column"
})
const Title = styled.h1({
    textAlign: "center",
    margin: "0px"
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