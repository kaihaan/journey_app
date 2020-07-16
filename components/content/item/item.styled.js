import styled from 'styled-components'

export const StyledItem = styled.div`
    margin: 0px;
    padding: 0px;
    background: ${({ transparent }) => transparent ? 'transparent' : 'inherit'};
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: ${({valign})=> valign==='top' ? 'start' : 'center'};
    align-items:  ${({halign})=> halign==='left' ? 'flex-start' : 'center'};
`