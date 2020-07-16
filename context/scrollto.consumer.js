import { contactContext } from "./contact.context"

export default ({children}) => {
    return (
        <contactContext.Consumer>
            { value => children}
        </contactContext.Consumer>
    )
}