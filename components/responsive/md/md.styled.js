import styled from 'styled-components'

// sm: '576px',
// md: '768px',
// lg: '992px',
// xl: '1200px'

// mobile first
// Medium - x1 less than SM, x2 up to Md etc
export const StyledMediumContainer = styled.div`

    display: flex;
    flex-direction: ${({row})=> row ? 'row' : 'column'};
    justify-content: ${({valign})=> valign === 'top' ? 'start' : 'center'};
    width: 100vw;
    overflow: hidden;


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


    /* x2 from sm to md */
    @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
        width: calc(0.9*100vw/2);
    }

    /* x3 from md to lg */
    @media (min-width: ${({ theme }) => `${theme.md}px`}) {
        width: calc(0.9*100vw/2);
    }

    /* x3 from lg to xl */
    @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
        width: calc(0.9*100vw/3);
    }

    /* x4 from xl */
    @media (min-width: ${({ theme }) => `${theme.xl}px`}) {
        width: calc(0.8*100vw/3);
    }

`