import React, { useState } from 'react'
import { validate } from './utils'

//CSS
import classes from './css/Input.module.css'


const Input = ({ type, label, props, validation, options, updateState }) => {

    // console.log(type, label, props, validation, options)

    // field state & error checking
    const [getFieldState, setFieldState] = useState({
        fieldVal: '',
        isErr: false,
        errMessage: ''
    })

    const Error = (props) => {
        return <div className={classes.Error}>{props.children}</div>
    }

    const makeSelect = (props, options, label, errorElement, inputClasses) => {
        let key = 0, jsxOptions = []
        options.map(option => {
            jsxOptions.push(<option key={key}>{option}</option>)
            return key++
        })
        if (errorElement) {
            inputClasses.unshift(classes.Select)
        } else {
            inputClasses = classes.Select
        }
        return (
            <>
                <label className={classes.Label} htmlFor={props.id}>{label}</label>
                <select {...props} className={classes.Select} onBlur={blurHandler}>
                    {jsxOptions})
                </select>
                {errorElement}
            </>)
    }



    const blurHandler = (event) => {

        let err = {
            errMessage: '',
            isErr: false
        }

        validate(validation, err)

        // update local field state
        setFieldState({
            fieldVal: event.target.value,
            isErr: err.isErr,
            errMessage: err.errMessage
        })

        // callback to update table state
        updateState({ [props.name]: { value: event.target.value, isErr: err.isErr } })

        console.log('onBlur ', event.target.value, err.errMessage)
    }



    let inputElement = null
    let errorElement = null
    let inputClasses = []

    if (getFieldState.isErr) {
        inputClasses.push(classes.FieldError)
        errorElement = <Error>{getFieldState.errMessage}</Error>
    }

    switch (type) {
        case ('text'):
            inputClasses.unshift(classes.InputBox)
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name}>{label}</label>
                    <input className={inputClasses.join(' ')} type="text" {...props} onChange={blurHandler} />
                    {errorElement}
                </>)
            break
        case ('textarea'):
            inputClasses.unshift(classes.InputBox)
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name}>{label}</label>
                    <textarea className={inputClasses.join(' ')}  {...props} onChange={blurHandler} />
                    {errorElement}
                </>)
            break
        case ('checkbox'):
            inputElement = (<>
                <div className={classes.CheckBoxDiv}>
                    <input className={inputClasses.join(' ')} type="checkbox" {...props} onChange={blurHandler} />
                    <label className={classes.CheckBoxLabel} htmlFor={props.name} onChange={blurHandler}>{label}</label>
                </div>
                {errorElement}</>)
            break
        case ('email'):
            inputClasses.unshift(classes.InputBox)
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name}>{label}</label>
                    <input className={inputClasses.join(' ')} type="email" {...props} onBlur={blurHandler} />
                    {errorElement}
                </>)
            break
        case ('select'):
            inputElement = makeSelect(props, options, label, errorElement, inputClasses)
            break
        case ('number'):
            inputClasses.unshift(classes.InputBox)
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name}>{label}</label>
                    <input className={inputClasses.join(' ')} type="number" {...props} onChange={blurHandler} />
                    {errorElement}
                </>)
            break
        case ('geoloc'):
            inputClasses.unshift(classes.InputBox)
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name}>{label}</label>
                    <input className={inputClasses.join(' ')} type="text" {...props} onChange={blurHandler} />
                    {errorElement}
                </>)
            break
        case ('date'):
            inputClasses.unshift(classes.InputBox)
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name}>{label}</label>
                    <input className={inputClasses.join(' ')} type="date" {...props} onChange={blurHandler} />
                    {errorElement}
                </>)
            break
        default:
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name} onChange={blurHandler} >{label}</label>
                    <input className={inputClasses.join(' ')} {...props} />
                    {errorElement}
                </>)
    }


    return (
        <div className={classes.InputDiv} >
            {inputElement}
        </div>
    )
}

export default Input