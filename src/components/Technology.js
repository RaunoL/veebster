import React from 'react'
import styled from 'styled-components'
import Title from './elements/Title'
import TechnologyBox from './elements/TechnologyBox'
const StyledSection = styled.section({})
    const TechnologyContent = styled.div({
        display: "flex",
        justifyContent: "space-between",
        flexFlow: "row wrap"
    })
function Technology() {
    
    return (
        <StyledSection>
            <Title name={"Tehnoloogia"} />
            <TechnologyContent className={"container"}>
                <TechnologyBox 
                name={"HTML, CSS, JS"}
                desc={"Lorem ipsum"}
                />
                <TechnologyBox 
                name={"React"}
                desc={"Lorem ipsum"}
                />
                <TechnologyBox 
                name={"NodeJS"}
                desc={"Lorem ipsum"}
                />
                <TechnologyBox 
                name={"MongoDB"}
                desc={"Lorem ipsum"}
                />
                <TechnologyBox 
                name={"Prismic"}
                desc={"Lorem ipsum"}
                />
                <TechnologyBox 
                name={"Shopify"}
                desc={"Lorem ipsum"}
                />
                <TechnologyBox 
                name={"Sass"}
                desc={"Lorem ipsum"}
                />
                <TechnologyBox 
                name={"Firebase"}
                desc={"Lorem ipsum"}
                />
                <TechnologyBox 
                name={"Bootstrap"}
                desc={"Lorem ipsum"}
                />
            </TechnologyContent>

        </StyledSection>
    )
}
export default Technology