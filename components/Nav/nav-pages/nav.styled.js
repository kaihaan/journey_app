import styled from 'styled-components'

export const StyledNav = styled.nav`
    display: none;
    align-items: baseline;
    justify-content: space-between;
    flex-grow: 1.2;

    & > div {
        display: inline-block;
        position: relative;
        white-space: nowrap;
    }

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

// & > a {
//     display: inline-block;
//     text-align: left;
//     padding: 0.15rem 0.5rem;
//     color: ${({ theme }) => theme.linkColor};

//     &:hover {
//         background-color: ${({ theme }) => theme.primaryHover};
//     }
// }`