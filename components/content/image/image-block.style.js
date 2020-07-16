import styled from 'styled-components'

export const StyledImageBlock = styled.div`

    overflow: hidden;
    text-align: center;

    img {
        object-fit: cover;
        width: ${({constrainHeight})=> constrainHeight ? '' : '100%'};
        height: ${({constrainHeight})=> constrainHeight ? '100%' : ''};
        /* transform: translateX(-25%); */
    }

`