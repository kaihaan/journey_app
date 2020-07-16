import styled from 'styled-components'

export const StyledSlider = styled.div`
width: 100%;

    .slidecontainer {
        width: 100%; /* Width of the outside container */
        display: grid;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 60px;
        justify-items: center;
        align-items: center;
        grid-auto-flow: row;
    }


    /* The slider itself */
    .slider {
        color: cyan;
        appearance: none;
        width: 100%; /* Full-width */
        height: 25px; /* Specified height */
        background: cyan; /* Grey background */
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        transition: opacity .2s;
    }
  
`