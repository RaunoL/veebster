import React from "react"
import BoxWrapper from "./BoxWrapper"
import styled from "styled-components"

const PortfolioItem = styled.div({})
    

function PortfolioElement(props) {
    const { name } = props
    const { desc } = props
    const { img } = props
    const HoverImage = styled.div`
        width: 90%;
        margin: 0 5%;
        height: 200px;
        background: url(${img}) no-repeat;
        background-size:cover;
        &:hover {
            cursor: pointer;
            animation: scrollBackground 10s infinite;
        }
    `
    return (
        <BoxWrapper>
            <PortfolioItem>
                <h4>{name}</h4>
                <HoverImage />
                <p>{desc}</p>
            </PortfolioItem>
        </BoxWrapper>
    )
}

export default PortfolioElement
