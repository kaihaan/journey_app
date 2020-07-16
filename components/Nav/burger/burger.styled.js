// Burger.styled.js
import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-around;
  width: 1.6rem;
  height: 1.6rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 50;
  
  &:focus {
    outline: none;
  }
  
  /*  ${({ theme, open }) => open ? theme.primaryLight : theme.primaryDark} */
  div {
    width: 100%;
    height: 15%;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 15px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }
  
      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
  }



      /* sm: '576px',
    // md: '768px',
    // lg: '992px',
    // xl: '1200px'
    */
    /* x1 from sm to md */
    @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
      display: flex;

    }

    /* x1 from md to lg */
    @media (min-width: ${({ theme }) => `${theme.md}px`}) {
      display: none;
    }

    /* x2 from lg to xl */
    @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
      display: none;

    }

    /* x2 from xl */
    @media (min-width: ${({ theme }) => `${theme.xl}px`}) {
      display: none;
    }



`