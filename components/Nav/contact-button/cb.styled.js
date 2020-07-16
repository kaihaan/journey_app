import styled from 'styled-components'

export const StyledContactButton = styled.span`
    display: none;
    flex-grow: 1;
    align-self: center;
    
    /* sm: '576px',
    // md: '768px',
    // lg: '992px',
    // xl: '1200px'
    */
    /* x1 from sm to md */
    @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
        display: none;
    }

    /* x1 from md to lg */
    @media (min-width: ${({ theme }) => `${theme.md}px`}) {
        display: flex;
    }

    /* x2 from lg to xl */
    @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
        display: flex;

    }

    /* x2 from xl */
    @media (min-width: ${({ theme }) => `${theme.xl}px`}) {
        display: flex;

    }

`