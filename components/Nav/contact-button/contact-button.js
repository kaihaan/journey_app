import React from 'react'
import { StyledContactButton } from './cb.styled'
import { Button } from '../../../components'
// import { navigate } from 'gatsby'


// import { useActive } from '../../../context/contact.hook.ts'
import { contactContext } from '../../../context/contact.context.ts'


// adds media queries to disappear on mobile...
export default ({ href }) => {

    //const { setActive } = useActive('Button')
    const { setActive } = React.useContext(contactContext)

    const scrollToContactSection = () => {

        // if not home page && link clicked - then programmatic link to...
        // get baseURL from process.env
        const baseUrl = process.env.GATSBY_BASE_URL === 'undefined' ? 'https://therapyforhealth.netlify.app' : process.env.GATSBY_BASE_URL 

        const url = typeof window !== 'undefined' ? window.location.href : '';
        const path = url.replace(baseUrl, '')

        console.log('baseUrl: ' + baseUrl)
        console.log(path)

        if (path !== '/') {
            //navigate('/contact')
        } else {
            setActive(true)
        }
    }

    return (

        <StyledContactButton>
            <Button onClick={scrollToContactSection}>Contact</Button>
        </StyledContactButton>
    )
}