import React from 'react'
import styled from 'styled-components'
import Title from './elements/Title'
import MaintainanceBox from "./elements/MaintainanceBox"

const StyledSection = styled.section({})
    const MaintPackages = styled.div({
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
    })

function Maintainance(){
    
    return(
        <StyledSection>
            <Title name={"Hooldamine"}/>
            <MaintPackages className={"container"}>
                <MaintainanceBox
                name={"Tehtud ja korras"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus aenean vel elit scelerisque mauris. Duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget. Tempor commodo ullamcorper a lacus. Quis risus sed vulputate odio ut enim blandit. Nisl condimentum id venenatis a. "}
                price={"Tasuta"}/>
                <MaintainanceBox
                name={"Hoodus ja majutus"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus aenean vel elit scelerisque mauris. Duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget. Tempor commodo ullamcorper a lacus. Quis risus sed vulputate odio ut enim blandit. Nisl condimentum id venenatis a. "}
                price={"25€/kuus"}/>
                <MaintainanceBox
                name={"Hooldus ja muudatused"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus aenean vel elit scelerisque mauris. Duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget. Tempor commodo ullamcorper a lacus. Quis risus sed vulputate odio ut enim blandit. Nisl condimentum id venenatis a. "}
                price={"40€/kuus"}/>
            </MaintPackages>
        </StyledSection>
    )
}

export default Maintainance