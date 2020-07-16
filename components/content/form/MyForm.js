import React, { Component } from 'react'
import classes from './css/MyForm.module.css' 
import presetForms from './forms'

import Input from './Input'
import Button from './Button'



export default class Form extends Component {

    state = {
        subject: {value: '', isErr: false},
        date: {value: '', isErr: false},
        descripton: {value: '', isErr: false},
        place: {value: '', isErr: false},
        geoloc: {value: '', isErr: false},
        person: {value: '', isErr: false},
        link: {value: '', isErr: false},
    }

    formBuilder = (event) => {

        const updateState = (state) => {
            // console.log('Update form state ', state)
            this.setState(state)
        }

        // use props to get formname
        // error should never occur in production - so throw a wobbly to the developer!
        if(!presetForms[this.props.formname]) throw "you have asked for form which doesn't exist"
        const inputs = presetForms[this.props.formname]

        return inputs.map(inputField => (
            <Input  {...inputField} key={inputField.props.name} updateState={updateState}/>
        ))

    }



    render = () => {
        // console.log(this.formBuilder())
        

        const formHandler = (event) => {
            // prevent page reload etc..
            event.preventDefault()

            // data needed already in state
            // console.log('formHandler:', this.state)

            // TODO
            // could add a forced check on all
            // add check on required
            // ping alert with
            // can add 'formIsValid' which only pops once all are :-)

            let formData = {}
            for(let [key,value] of Object.entries(this.state)) {
                //console.log('state element - ', value.value)

                if(value.isErr) return alert("Form contains errors")
                formData[key] = value.value
            }

            if(this.props.callback) this.props.callback(formData)
        }

        return (
            <>
                <form className={classes.Form} onSubmit={formHandler}>
                    {this.formBuilder()}
                    <Button type="submit">Submit</Button>
                </form>
            </>
        )

    }
}