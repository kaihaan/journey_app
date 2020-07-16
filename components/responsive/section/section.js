import React, { useRef, useEffect } from 'react'
import { StyledSection, StyledSectionDiv } from './section.styled'



const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' })
// General scroll to element function


export default ({ useDiv, video, children, background, scrollTarget, activeState, imageUrl }) => {

    
    // console.log('Section Image : ' + imageUrl)

    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7
            //console.dir(videoRef.current)
        }
    })

    // scrolls to itself :-)
    // change to true of activeState (as a prop) triggers it
    const sectionRef = useRef(null)
    const executeScroll = () => scrollToRef(sectionRef)

    if (activeState && scrollTarget === 'contactForm') {
        // console.log('Section Triggered')
        // console.log(sectionRef)
        // console.dir(typeof(sectionRef))
        executeScroll()
    }


    let backgroundMarkup // used if props ask for background
    let markup  // used to compose either DIV or SECTION based component


    if (video) {
        backgroundMarkup = (
            <div className="video">
                <video playsInline autoPlay muted loop poster={pleaseWait} ref={videoRef}>
                    <source src="" type="video/mp4" />
                </video>
            </div>
        )
    }

    if (imageUrl) {
        backgroundMarkup = (
            <div className="BackgroundImage" > 
                <img src="" alt="background" />
            </div>
        )
    }


    if (useDiv) {
        markup = (
            <StyledSectionDiv background={background} >
                {backgroundMarkup}
                { children }
            </StyledSectionDiv >
        )
    } else {
        markup = (
            <StyledSection background={background} >
                {backgroundMarkup}
                { children }
            </StyledSection >
        )
    }

    return (
        <div ref={sectionRef} >
            {markup}
        </div>
    )
}
