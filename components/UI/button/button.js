import React from 'react'
import { StyledButton } from './button.styled'

export default ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}