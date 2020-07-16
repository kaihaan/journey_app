import React from 'react'
import {StyledXLContainer } from './xl.styled'

export default ({children, background, color, nopadding, row}) => {
    return (
        <StyledXLContainer background={background} color={color} nopadding={nopadding} row={row}>
            {children}
        </StyledXLContainer>
    )
}