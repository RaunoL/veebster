import React from 'react'
import BoxWrapper from "./BoxWrapper"
import styled from 'styled-components'

const ImageWrapper = styled.div({
    height: "100px",

})
const StyledImage = styled.img({
    width: "auto",
    height: "68px",
    padding: "16px"
})

function TechnologyBox(props) {
    const { name } = props
    const { desc } = props

    return (
            <BoxWrapper>
                <ImageWrapper>
                    <StyledImage src={require(`../../assets/tech_Icons/${name}.png`)} />
                </ImageWrapper>
                <h6>{name}</h6>
                <p>{desc}</p>
            </BoxWrapper>
    )

}
export default TechnologyBox