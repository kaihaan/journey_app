import styled from 'styled-components'

// mobile first
// Medium - x1 less than SM, x2 up to Md etc
export const StyledLgContainer = styled.div`
    display: flex;
    flex-direction: ${({ row }) => row ? 'row' : 'column'};
    justify-content: center;
    justify-self: center;
    width: 100vw;


    padding: ${({ nopadding }) => nopadding ? '0px' : '2vw'};
    margin: ${({ nopadding }) => nopadding ? '0px' : '2vw'};

    background: ${({ theme, background }) => {
        switch (background) {
            case 'hero':
                return theme.hero
            case 'light':
                return theme.primaryLight
            case 'dark':
                return theme.primaryDark
            case 'video':
                return 'transparent'
            case 'transparent':
                return 'transparent'
            default:
                return background ? background : 'inherit'
        }
    }};
    color:  ${({ theme, background, color }) => {
        switch (background) {
            case 'hero':
                return theme.primaryDark
            case 'light':
                return theme.primaryDark
            case 'dark':
                return theme.primaryLight
            default:
                return color ? color : 'inherit'
        }
    }};

    /* sm: '576px',
    // md: '768px',
    // lg: '992px',
    // xl: '1200px'
    */
    /* x1 from sm to md */
    @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
        width: 100vw;

    }

    /* x1 from md to lg */
    @media (min-width: ${({ theme }) => `${theme.md}px`}) {
        width: 100vw;
    }

    /* x2 from lg to xl */
    @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
        width: calc(0.9*100vw/2);

    }

    /* x2 from xl */
    @media (min-width: ${({ theme }) => `${theme.xl}px`}) {
        width: calc(0.9*100vw/2);

    }

`