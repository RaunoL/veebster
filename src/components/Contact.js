import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Title from './elements/Title'
const StyledSection = styled.section({})
    const ContactContent = styled.div`
        display: flex;
        @media(max-width: ${props => props.theme.breakpoints.s}){
            flex-flow: column wrap;
        }
    `
    const StyledForm = styled.form({
        flexBasis: "60%"
    })
    const StyledLabel = styled.h6({
        paddingLeft: "16px"
    })
    const StyledInput = styled.input({
        width: "90%",
        border: "none",
        borderRadius: "8px",
        padding: "8px",
        fontSize: "16px",
        boxShadow: props => props.theme.shadows.boxShadow,
        margin: "16px"

    })
    const StyledTextarea = styled.textarea({
        width: "90%",
        border: "none",
        borderRadius: "8px",
        padding: "8px",
        fontSize: "16px",
        boxShadow: props => props.theme.shadows.boxShadow,
        margin: "16px"
    })
    const StyledContacts = styled.div`
        flex-basis: 40%;
        text-align: center;
        @media(max-width: ${props =>props.theme.breakpoints.s}){
            text-align: left
        }
    `
    const StyledButton = styled.button({
        float: "right",
        margin: "0 5%",
        padding: "10px 60px",
    })
function Contact() {
    return (
        <StyledSection>
            <Title name={"Kontakt"} />
            <ContactContent className={"container"}>
                <StyledForm>
                    <label htmlFor={"email"}><StyledLabel>Teie e-mail</StyledLabel> </label>
                    <StyledInput name={"email"} id={"email"} placeholder={"e-mail"}></StyledInput>
                    <label htmlFor={"message"}><StyledLabel>Teie sõnum</StyledLabel></label>
                    <StyledTextarea name={"message"} id={"message"} placeholder={"sõnum"}></StyledTextarea>
                    <StyledButton className={"btn"}>Saada</StyledButton>
                </StyledForm>
                <StyledContacts>
                    <h6>Minu Email</h6>
                    <p>info@veebster.ee</p>
                    <h6>Minu telefon</h6>
                    <p>+372 5822 6840</p>
                </StyledContacts>
            </ContactContent>
        </StyledSection>
    )
}
export default Contact