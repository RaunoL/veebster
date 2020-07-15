import React from 'react'
import styled from 'styled-components'
import Title from './elements/Title'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const StyledSection = styled.section({})

function Journey() {
    
    return (
        <StyledSection id={"journey"}>
            <Title name={"Ideest tooteni"}/>
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="Vajaduste hindamine"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Plaan ja pakkumine"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Kasutajakogemuse ja funktsionaalsuse plaan"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Kasutajaliidese disain"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Tagasiside"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Tehniline plaan"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Rakendamine"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Ülevaade"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Üleandmine"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Hooldus"
                    dateClassName={ "timelineElementName" }
                    contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                    iconClassName={"timelineIcon"}
                    className={ "timelineShadow" }
                ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nibh sed velit ornare semper. Cras eget convallis est, eu lobortis neque. </p>

                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </StyledSection>

    )
}

export default Journey