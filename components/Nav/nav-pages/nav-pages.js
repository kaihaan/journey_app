import React, { useState } from 'react'
import { StyledLink } from './link.styled'
import { StyledNav } from './nav.styled'
import { StyledDropDownUl } from './dropdown-ul.styled'
import { StyledCaret } from './caret.styled'

export default () => {


    const [ddIsOpen, setDdIsOpen] = useState(false)

    const ddHandler = () => {
        setDdIsOpen(!ddIsOpen)
    }

    return (
        <StyledNav>
            <StyledLink to="/services"  activeClassName="activeLink">Services</StyledLink>
            <div><button type="button" className="button-link" onClick={ddHandler}>Expertise<StyledCaret pointsUp={ddIsOpen}/></button>
                <StyledDropDownUl isOpen={ddIsOpen}>
                    <li><StyledLink to="/testimonial" activeClassName="activeLink">testimonials</StyledLink></li>
                    <li><StyledLink to="/network"  activeClassName="activeLink">network</StyledLink></li>
                    <li><StyledLink to="/about"  activeClassName="activeLink">about</StyledLink></li>
                </StyledDropDownUl>
            </div>
            <StyledLink to="/articles/index/1"  activeClassName="activeLink">Articles</StyledLink>
        </StyledNav>
    )
}