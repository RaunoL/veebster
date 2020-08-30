import React from "react"
import styled from "styled-components"
import Title from "../components/elements/Title"
const AboutSection = styled.section({

})
const StyledSummary = styled.summary({
    textAlign: "center",
    outline: "none",
})
const Details = styled.details`
&:hover{
    cursor:pointer
}
`
function About() {
    
    return (
        <AboutSection id={"about"}>
            <Title name={"Minust"} />
            <div className={"container"}>
                <Details>
                    <StyledSummary><h4>Miks valida Mind?</h4></StyledSummary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper mauris at ligula pellentesque, ut vehicula quam vehicula. Praesent justo elit, congue et sollicitudin vitae, pharetra id velit. Praesent risus orci, malesuada non laoreet id, varius a magna. Mauris bibendum hendrerit lobortis. Phasellus ac sagittis nunc. Aliquam ornare eu libero nec tristique. Etiam ultrices leo condimentum tristique tempor. In vitae lacus quis sapien lobortis iaculis ac non quam. Etiam vehicula, quam eu rhoncus imperdiet, odio velit congue risus, eu sodales urna nunc tempus metus. Fusce pharetra neque nec aliquet dignissim. Aliquam volutpat, nulla vel egestas feugiat, ipsum lorem accumsan felis, nec bibendum felis ipsum quis massa. Sed blandit a lorem at posuere.</p>
                </Details>
                <Details>
                    <StyledSummary><h4>Mida Ma teen?</h4></StyledSummary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper mauris at ligula pellentesque, ut vehicula quam vehicula. Praesent justo elit, congue et sollicitudin vitae, pharetra id velit. Praesent risus orci, malesuada non laoreet id, varius a magna. Mauris bibendum hendrerit lobortis. Phasellus ac sagittis nunc. Aliquam ornare eu libero nec tristique. Etiam ultrices leo condimentum tristique tempor. In vitae lacus quis sapien lobortis iaculis ac non quam. Etiam vehicula, quam eu rhoncus imperdiet, odio velit congue risus, eu sodales urna nunc tempus metus. Fusce pharetra neque nec aliquet dignissim. Aliquam volutpat, nulla vel egestas feugiat, ipsum lorem accumsan felis, nec bibendum felis ipsum quis massa. Sed blandit a lorem at posuere.</p>
                </Details>
                <Details>
                    <StyledSummary><h4>Kuidas ma saan ühendust võtta?</h4></StyledSummary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper mauris at ligula pellentesque, ut vehicula quam vehicula. Praesent justo elit, congue et sollicitudin vitae, pharetra id velit. Praesent risus orci, malesuada non laoreet id, varius a magna. Mauris bibendum hendrerit lobortis. Phasellus ac sagittis nunc. Aliquam ornare eu libero nec tristique. Etiam ultrices leo condimentum tristique tempor. In vitae lacus quis sapien lobortis iaculis ac non quam. Etiam vehicula, quam eu rhoncus imperdiet, odio velit congue risus, eu sodales urna nunc tempus metus. Fusce pharetra neque nec aliquet dignissim. Aliquam volutpat, nulla vel egestas feugiat, ipsum lorem accumsan felis, nec bibendum felis ipsum quis massa. Sed blandit a lorem at posuere.</p>
                </Details>
                <Details>
                    <StyledSummary><h4>Kas võin ühendust võtta ka siis kui mul ei ole uut lehekülge vaja?</h4></StyledSummary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper mauris at ligula pellentesque, ut vehicula quam vehicula. Praesent justo elit, congue et sollicitudin vitae, pharetra id velit. Praesent risus orci, malesuada non laoreet id, varius a magna. Mauris bibendum hendrerit lobortis. Phasellus ac sagittis nunc. Aliquam ornare eu libero nec tristique. Etiam ultrices leo condimentum tristique tempor. In vitae lacus quis sapien lobortis iaculis ac non quam. Etiam vehicula, quam eu rhoncus imperdiet, odio velit congue risus, eu sodales urna nunc tempus metus. Fusce pharetra neque nec aliquet dignissim. Aliquam volutpat, nulla vel egestas feugiat, ipsum lorem accumsan felis, nec bibendum felis ipsum quis massa. Sed blandit a lorem at posuere.</p>
                </Details>
                </div>
        </AboutSection>
    )
}
export default About