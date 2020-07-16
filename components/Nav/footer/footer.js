import React from 'react'
import { StyledFooter } from './footer.styled'

import { Section, Contact } from '../..'

const Footer = () => {
    return (
        <StyledFooter>
            <Section background="dark">
                <Contact></Contact>
            </Section>
        </StyledFooter>
    )
}
export default Footer