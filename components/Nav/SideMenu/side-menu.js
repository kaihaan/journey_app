// Menu.js
import React from 'react';
import { StyledSideMenu } from './side-menu.styled';
import PropTypes from 'prop-types';
import { Link } from "next/link"

const Menu = ({open, show}) => {
    return (
        <StyledSideMenu open={open} show={show}>
            <Link to="/"> home </Link>
            <Link to="/services"> services</Link>
            <Link to="/testimonial"> testimonials</Link>
            <Link to="/network"> network</Link>
            <Link to="/articles/index/1"> articles</Link>
            <Link to="/about"> about</Link>
            <Link to="/contact"> contact</Link>
        </StyledSideMenu>
    )
}

Menu.propTypes = {
    open: PropTypes.bool.isRequired
}

export default Menu;