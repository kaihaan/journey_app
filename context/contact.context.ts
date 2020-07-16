import React from 'react'

export interface ContactContextType {
    activeState: boolean;
    setActive: (isActive: boolean)=>void;
}

export const ACTIVE_DEFAULT = {
    activeState: false,
    setActive: () => {}
}


export const contactContext = React.createContext<ContactContextType>(ACTIVE_DEFAULT)
export const ContactConsumer: React.Consumer<ContactContextType> = contactContext.Consumer
export const ContactProvider: React.Provider<ContactContextType> = contactContext.Provider