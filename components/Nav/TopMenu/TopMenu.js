import React, { useState } from 'react'
import { StyledTopMenu } from './top-menu.styled'
import { Burger, SideMenu, Logo, NavLinks } from '../../../components'
import { useScrollPosition } from '../../../utils/useScrollPosition'
import ContactButton from '../contact-button/contact-button'


export default () => {

    const [open, setOpen] = useState(false);
    const [isNavBarHidden, setNavBarIsHidden] = useState(true)

    // custom hook...
    // curPos.y goes neg down the page!
    useScrollPosition(({ prevPos, currPos }) => {
        //console.log(currPos.y)
        // if gone UP the page....
        const shouldShow = currPos.y > prevPos.y
        if (shouldShow !== isNavBarHidden) setNavBarIsHidden(shouldShow)
    }, [isNavBarHidden], null, false, 200)


    // NOTE: OTHERWISE POINTLESS INNER DIV ALLOWS FOR STYLING!!

    return (
        <>
            <StyledTopMenu show={isNavBarHidden}>
                <div>
                    <Logo />
                    <NavLinks />
                    <ContactButton />
                    <Burger open={open} setOpen={setOpen} />
                </div>
            </StyledTopMenu>
            <SideMenu open={open} setOpen={setOpen} show={isNavBarHidden}/>
        </>
    )
}
