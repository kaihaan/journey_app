import React from 'react'
import { contactContext } from "./contact.context"
import { useActive } from "./contact.hook"





export const ContactProvider = ({children}) => {

    const state = useActive()

    return (
        <contactContext.Provider value={state}>
            {children}
        </contactContext.Provider>
    )
}

export const ContactConsumer = ({children}) => {
    return (
        <contactContext.Consumer>
            { value => children}
        </contactContext.Consumer>
    )
}