import styled from 'styled-components'

export const StyledDropDownUl = styled.ul`
    width: auto;
    list-style: none;
    margin: 0;
    margin-top: 2vw;
    padding: 0;
    position: absolute;
    float: left;
    max-height: ${({ isOpen }) => isOpen ? '300px' : '0'};
    height: ${({ isOpen }) => isOpen ? 'auto' : ''};
    overflow: hidden;
    transition: ${({ isOpen }) => isOpen ? 'all .25s linear;' : 'all .55s linear'};
    background-color: white;
    box-shadow: 0 0 3px rgba(0,0,0,.15);
    border-radius: 5px;
`
