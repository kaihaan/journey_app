import styled from 'styled-components'

export const StyledCaret = styled.span`
  display: inline-block;
  padding: 3px;
  border-style: solid;
  border-width: 0 2px 2px 0;
  border-color: ${({theme}) => theme.linkColor};
  transform: ${({ pointsUp }) => pointsUp ? 'translate(8px, -1px) rotate(-135deg) ' : 'translate(8px, -4px) rotate(45deg) '};  
  transition: ${({ pointsUp }) => pointsUp ? 'all 0.25s ease-out' : 'all 0.25s ease-in'};

`

// width: 10px;
//   height: 10px;
//   border-style: solid;
//   border-width: 1px 1px 0 1px;

// margin-left: 6px;
// margin-top: -3px;

//  transparent transparent transparent;

// background-color: transparent;