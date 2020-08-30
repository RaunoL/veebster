import React from "react"
import BoxWrapper from "./BoxWrapper"
import styled from "styled-components"

const PortfolioItem = styled.div({})
const HoverImage = styled.div`
width: 90%;
margin: 0 5%;
height: 200px;
&:hover {
    cursor: pointer;
    animation: scrollBackground 10s infinite;
}
`

function PortfolioElement(props) {
    const { name } = props
    const { desc } = props
    const { img } = props


    return (
        <BoxWrapper>
            <PortfolioItem>
                <h4>{name}</h4>
                <HoverImage style={{ background: `url(${img}) no-repeat`, backgroundSize: "cover" }} />
                <p>{desc}</p>
            </PortfolioItem>
        </BoxWrapper>
    )
}

export default PortfolioElement
