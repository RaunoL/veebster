import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 16px;
        background-color: ${props => props.theme.colors.white};
        box-shadow: ${props => props.theme.shadows.boxShadow};
        border-radius: 16px;
        z-index: 1000;
        @media(max-width:${props => props.theme.breakpoints.m}){
            flex-flow: row wrap
        }
    `
    const NavSection = styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 1;
        position: fixed;
        @media(max-width:${props => props.theme.breakpoints.s}){
            position: absolute;
        }
    `
    
    const Logo = styled.img`
        width: auto;
        height: 50px;
        @media(max-width:${props => props.theme.breakpoints.m}){
            order: -1
        }
        `
    const NavPhone = styled.h6`
        display: flex;
        @media(max-width:${props => props.theme.breakpoints.m}){
            order: -1
        }
        `
    const NavEmail = styled.h6`
        display: flex; 
        @media(max-width:${props => props.theme.breakpoints.m}){
            order: 2
        }
        `
    const NavIcon = styled.i({
        fontSize: "2rem",
        paddingRight: "10px"
    })

function Nav() {

    
    return (
        <NavSection>
            <div className="container">
                <NavBar>
                    <Logo src={require("../assets/Asset 2.svg")} alt="" />
                    <NavEmail><NavIcon className={"material-icons md-36"}>email</NavIcon>info@veebster.ee</NavEmail>
                    <NavPhone><NavIcon className={"material-icons md-36"}>phone</NavIcon>+372 5822 6840</NavPhone>
                    <button className={"btn"}>Võta Ühendust</button>
                </NavBar>
            </div>

        </NavSection>
    )
}
export default Nav