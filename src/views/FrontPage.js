import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Journey from '../components/Journey'
import Technology from '../components/Technology'
import Portfolio from '../components/Portfolio'
import Services from "../components/Services"
import Maintainance from "../components/Maintainance"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Wrapper = styled.div({
    backgroundColor: props => props.theme.colors.background,
})

function FrontPage() {

    
    return (

        <Wrapper>
            <Nav />
            <Hero/>
            <About/>
            <Journey/>
            <Technology/>
            <Portfolio/>
            <Services/>
            <Maintainance/>
            <Contact/>
            <Footer/>
        </Wrapper>

    )
}
export default FrontPage