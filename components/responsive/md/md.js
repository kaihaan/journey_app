import React from 'react'
import {StyledMediumContainer } from './md.styled'

export default ({children, background, color, nopadding, valign, row}) => {
    return (
        <StyledMediumContainer background={background} color={color} nopadding={nopadding} valign={valign} row={row}>
            {children}
        </StyledMediumContainer>
    )
}