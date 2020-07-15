import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer({
    textAlign: "center",
    background: props => props.theme.colors.main
})
const StyledParagraph = styled.p({
    margin: "50px 0 0 0",
    color: props => props.theme.colors.white,
    padding: "16px"
})
function Footer(){
    
    return(
        <StyledFooter>
            <StyledParagraph>Copyright © {new Date().getFullYear()} Veebster OÜ. All Rights Reserved</StyledParagraph>
        </StyledFooter>
    )
}
export default Footer