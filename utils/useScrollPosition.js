import {useRef, useLayoutEffect} from 'react'


// check if wndows present (incase server side rendering env)
const isBrowser = typeof window !== `undefined`

// helper
function getScrollPosition({ element, useWindow }) {
    if (!isBrowser) return { x: 0, y: 0 }

    // check if user targetting element or whole page
    // element passed in from a useRef - so access in element.current

    const target = element ? element.current : document.body
    const position = target.getBoundingClientRect()

    // useWindow lets user select which position method to use
    return useWindow
        ? { x: window.scrollX, y: window.scrollY }
        : { x: position.left, y: position.top }
}


// scroll position Hook function
export function useScrollPosition(effect, deps, element, useWindow, wait) {

    // stateful pos - that doesn't trigger browser refresh
    const position = useRef(getScrollPosition({ useWindow }))

    const throttleTimeout = useRef(null)
        
    const callBack = () => {
        const currPos = getScrollPosition({ element, useWindow })
        effect({ prevPos: position.current, currPos })
        position.current = currPos
        throttleTimeout.current = null
    }

    /* eslint-disable react-hooks/exhaustive-deps */
    useLayoutEffect(() => {

        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout.current === null) {
                    throttleTimeout.current = setTimeout(callBack, wait)
                }
            } else {
                callBack()
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, deps)
}

useScrollPosition.defaultProps = {
    deps: [],
    element: false,
    useWindow: false,
    wait: null,
  }