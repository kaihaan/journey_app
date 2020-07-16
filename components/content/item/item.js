import React from 'react'
import {StyledItem} from './item.styled'



const Item = ({children, width, valign, transparent, halign}) => {
    return (
        <StyledItem width={width} valign={valign} transparent={transparent} halign={halign}>
            {children}
        </StyledItem>
    )
}

export default Item