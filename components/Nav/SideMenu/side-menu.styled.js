// Menu.styled.js
import styled from 'styled-components';

export const StyledSideMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.primaryDark};
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding: 5.2rem 0 1rem 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'none' : 'translateY(-100%)'};

  /* show / hide the whole menu */
  visibility: ${({show}) => show ? 'visible ' : 'hidden '};

  /* transition: all 200ms ${({show}) => show ? 'ease-in' : 'ease-out'}; */
  /* transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')}; */

  a {
    font-size: 1rem;
    padding: 0.5rem 0;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;