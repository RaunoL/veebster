import React from 'react'
import styled from 'styled-components'
import Title from './elements/Title'
import PortfolioElement from "./elements/PortfolioElement"


const StyledSection = styled.section({})
    const PortfolioContent = styled.div({
        textAlign: "center", 
        display: "flex",
        justifyContent: "space-between",
        flexWrap : "wrap"
    })

function Portfolio(){
    
    return(
        <StyledSection>
            <Title name={"Tehtud tööd"}/>
            <PortfolioContent className={"container"}>
                <PortfolioElement
                img={require("../assets/portfolio/mk2.png")}
                name={"Magusad küsimused Ärikliendile"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. "}
                />
                <PortfolioElement
                img={require("../assets/portfolio/mk1.png")}
                name={"Magusad küsimused eraklientidele"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. "}
                />
                <PortfolioElement
                img={require("../assets/portfolio/daycare.png")}
                name={"Lemmikloomade hotell"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. "}
                />
            </PortfolioContent>
        </StyledSection>
    )
}

export default Portfolio