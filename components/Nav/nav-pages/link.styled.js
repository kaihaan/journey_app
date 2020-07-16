import styled from 'styled-components'
import Link from 'next/link'

export const StyledLink = styled(Link)`
    display: inline-block;
    text-align: left;
    padding: 0.4rem 0.5rem;
    color: ${({theme}) => theme.linkColor};

    &:hover, &:focus {
        color: ${({theme}) => theme.primaryHover};
    }

    .active {
        color: ${({theme}) => theme.primaryHover};
    }
`