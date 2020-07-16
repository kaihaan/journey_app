import React from 'react'
import {StyledLgContainer } from './lg.styled'

export default ({children, background, color, row}) => {
    return (
        <StyledLgContainer background={background} color={color} row={row}>
            {children}
        </StyledLgContainer>
    )
}