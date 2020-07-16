import React from 'react'
import { StyledImageBlock } from './image-block.style'

export default ({ image, constrainHeight, imageUrl }) => {
    return (
        <StyledImageBlock constrainHeight={constrainHeight}>
            <img src={imageUrl} alt={image}/>
        </StyledImageBlock>)
}