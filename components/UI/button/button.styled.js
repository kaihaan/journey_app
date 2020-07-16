import styled from 'styled-components'

export const StyledButton = styled.button`
  display: inline-block;
  align-self: center;
  height: 38px;
  padding: 0 30px;
  color: ${({primary}) => primary ? '#FFF' : '#555'};
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: ${({primary}) => primary ? '#33C3F0' : 'transparent'};
  border-radius: 4px;
  border: ${({primary}) => primary ? '1px solid #33C3F0' : '1px solid #bbb'};
  cursor: pointer;
  box-sizing: border-box; 
  margin-left: auto;

  &:hover,
  &:focus {
  color: ${({primary, theme}) => primary ? '#FFF' : theme.primaryDark};;
  border-color: ${({primary, theme}) => primary ? '#1EAEDB' : theme.primaryHover};
  background-color: ${({primary}) => primary ? '#1EAEDB' : ''};
  outline: 0; 
  }
`