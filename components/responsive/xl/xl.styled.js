import styled from 'styled-components'

// sm: '576px',
// md: '768px',
// lg: '992px',
// xl: '1200px'

// mobile first
// Medium - x1 less than SM, x2 up to Md etc
export const StyledXLContainer = styled.div`
    display: flex;
    flex-direction:  ${({ row }) => row ? 'row' : 'column'};
    width: 90vw;
    padding: ${({ nopadding }) => nopadding ? '0px' : '2vw'};
    margin:  ${({ nopadding }) => nopadding ? '0px' : '2vw'};
    height: 100%;
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


    /* no @media breaks - always 100vw wide !! */

`