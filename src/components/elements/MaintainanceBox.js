import React from "react"
import BoxWrapper from "./BoxWrapper"

function MaintainanceBox(props) {
    const { name } = props
    const { desc } = props
    const { price } = props
    return (
        <BoxWrapper>
            <h5>{name}</h5>
            <p>{desc}</p>
            <span className={"btn"}>{price}</span>
        </BoxWrapper>
    )
}

export default MaintainanceBox