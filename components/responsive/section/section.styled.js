import styled from 'styled-components'

// this will be the Row-Container for responsive Box elements
// called ContainerMd / ContainerSm etc...

// NB - make sure div & section are the same!!!
// see below the section !!!

export const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
    max-width: 100%;
    text-align: center;
    height: 100%;
    max-height: 100%;
    padding: ${({ background }) => background === 'video' ? '2vw 0px' : ''};
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
                return theme.primaryLight
        }
    }};
    color:  ${({ theme, background }) => {
        switch (background) {
            case 'hero':
                return theme.primaryDark
            case 'light':
                return theme.primaryDark
            case 'dark':
                return theme.primaryLight
            default:
                return theme.primaryDark
        }
    }};


    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -10;
        }

    .video:after {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -5;
        background: black;
        opacity: 0.3;
        content: '\A';
        }

    .BackgroundImage {
        position: fixed;
        z-index: -10;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .BackgroundImage > img {
        filter: brightness(50%);
        transform: translateY(-100px);
        width: 100vw;
        object-fit: cover;
    }
`

// this will be the Row-Container for responsive Box elements
// called ContainerMd / ContainerSm etc...
export const StyledSectionDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    text-align: center;
    padding: ${({ background }) => background === 'video' ? '2vw 0px' : ''};
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
                return theme.primaryLight
        }
    }};
    color:  ${({ theme, background }) => {
        switch (background) {
            case 'hero':
                return theme.primaryDark
            case 'light':
                return theme.primaryDark
            case 'dark':
                return theme.primaryLight
            default:
                return theme.primaryDark
        }
    }};


    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -10;
        }

    .video:after {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -5;
        background: black;
        opacity: 0.3;
        content: '\A';
        }
`