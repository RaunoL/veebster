import React, { useState } from 'react'
import styled from 'styled-components'
import Title from './elements/Title'
const StyledSection = styled.section({})
    const ServicesContent = styled.div({
        display: "flex",
        flexWrap: "wrap"
    })

    const Buttons = styled.div`
        flex-basis: 40%;
        display: flex;
        flex-flow: column wrap;
        @media(max-width: ${props => props.theme.breakpoints.s}){
            flex-basis: 100%;
        }
    `
    const ServiceButton = styled.button({
        margin:"16px"
    })
    const CurrentService = styled.div`
        flex-basis: 60%;
        @media(max-width: ${props => props.theme.breakpoints.s}){
            flex-basis: 100%;
        }
    `
    const BoxWrapper = styled.div({
        padding: "16px",
        boxShadow: props => props.theme.shadows.boxShadow,
        background: props => props.theme.colors.white,
        borderRadius: "16px",
        textAlign: "center"
    })
function Services() {
    const [currentHoverName, setCurrentHoverName] = useState("Professional website")
    const [currentHoverDesc, setCurrentHoverDesc] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus aenean vel elit scelerisque mauris. Duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget. Tempor commodo ullamcorper a lacus. Quis risus sed vulputate odio ut enim blandit. Nisl condimentum id venenatis a. ")
    const [currentHoverPrice, setCurrentHoverPrice] = useState("$500")
    
    const changeHover = (data) => {
        setCurrentHoverName(data.getAttribute("data-service-type"))
        setCurrentHoverDesc(data.getAttribute("data-service-desc"))
        setCurrentHoverPrice(data.getAttribute("data-service-price"))
    }
    return (
        <StyledSection>
            <Title name={"Teenused"} />
            <ServicesContent className={"container"}>
                <Buttons>
                    <ServiceButton
                        data-service-type={"Professionaalne koduleht"}
                        data-service-desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus aenean vel elit scelerisque mauris. Duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget. Tempor commodo ullamcorper a lacus. Quis risus sed vulputate odio ut enim blandit. Nisl condimentum id venenatis a. "}
                        data-service-price={"€500"}
                        onMouseEnter={(e)=>changeHover(e.target)}
                        className={"btn"}>
                        Professionaalne koduleht
                     </ServiceButton>
                    <ServiceButton
                        data-service-type={"Koduleht koos sisuhaldusega"}
                        data-service-desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus aenean vel elit scelerisque mauris. Duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget. Tempor commodo ullamcorper a lacus. Quis risus sed vulputate odio ut enim blandit. Nisl condimentum id venenatis a. "}
                        data-service-price={"€800"}
                        onMouseEnter={(e)=>changeHover(e.target)}
                        className={"btn"}>
                        Koduleht koos sisuhaldusega
                     </ServiceButton>
                    <ServiceButton
                        data-service-type={"E-pood"}
                        data-service-desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus aenean vel elit scelerisque mauris. Duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget. Tempor commodo ullamcorper a lacus. Quis risus sed vulputate odio ut enim blandit. Nisl condimentum id venenatis a. "}
                        data-service-price={"€1000"}
                        onMouseEnter={(e)=>changeHover(e.target)}
                        className={"btn"}>
                        E-pood
                     </ServiceButton>
                    <ServiceButton
                        data-service-type={"Veebiäpp"}
                        data-service-desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus aenean vel elit scelerisque mauris. Duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget. Tempor commodo ullamcorper a lacus. Quis risus sed vulputate odio ut enim blandit. Nisl condimentum id venenatis a. "}
                        data-service-price={"€1600"}
                        onMouseEnter={(e)=>changeHover(e.target)}
                        className={"btn"}>
                        Veebiäpp
                     </ServiceButton>
                    <ServiceButton
                        data-service-type={"Mõni muu idee"}
                        data-service-desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus aenean vel elit scelerisque mauris. Duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget. Tempor commodo ullamcorper a lacus. Quis risus sed vulputate odio ut enim blandit. Nisl condimentum id venenatis a. "}
                        data-service-price={"?"}
                        onMouseEnter={(e)=>changeHover(e.target)}
                        className={"btn"}>
                        Mõni muu idee
                     </ServiceButton>

                </Buttons>
                <CurrentService>
                    <BoxWrapper>
                        <h4>{currentHoverName}</h4>
                        <p>{currentHoverDesc}</p>
                        <h5>Hinnad alates {currentHoverPrice}</h5>
                        <button className={"btn"}>Võta ühendust</button>
                    </BoxWrapper>
                </CurrentService>

            </ServicesContent>

        </StyledSection>
    )
}
export default Services