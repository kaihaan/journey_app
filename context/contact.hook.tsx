import { useState } from 'react'
import { ContactContextType, ContactConsumer } from './contact.context'
// import { useScrollPosition } from '../utils/useScrollPosition'



export const useActive = (src: string): ContactContextType => {

    const [activeState, setActiveState] = useState(false)

    const setActive = (isActive: boolean): void => {

        if (isActive) setActiveState(isActive)

        const timer = setTimeout(() => {
            setActiveState(false)
        }, 300)
    }

    return {
        activeState,
        setActive
    }
}

// functional HOCConsumer  wrapper...


// interface PropType {
//   activeState: boolean;
//   setActive: (isActive: boolean)=>void;
//   [propName: string]: any;
// }


// export function withAppContext(PassedComponent: React.ComponentType): React.ComponentType {
//   return function returnAComponent(props) {
//     return (
//       <ContactConsumer>
//         {value => <PassedComponent {...props} value={value} />}
//       </ContactConsumer>
//     );
//   };
// }