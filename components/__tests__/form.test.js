// import @testing-library/react to run integration test on react components

import { render, fireEvent, screen } from '@testing-library/react';
import { Form } from '../../components'

import {call_render_test,  } from '../__mocks__/form.mock'

describe("Test form building component", () => {

    // expects 
    // 1. caller to have chosen one of internal preset forms
    // 2. valid form to be created (fields, submit button)
    // 3. json data to be return on submit

    // existing forms in this project are
    // geocode & manageTimeline




    test.each(call_render_test)('Called with %s - expecting Label %s', (formname, expectedLabel) => {
        const { getByLabelText } = render(<Form formname={formname} />)
        expect(getByLabelText(expectedLabel)).toBeInTheDocument();
    })


    test("fire submit with invalid data produces err message", () => {

        const cb = jest.fn()

        // fireEvent.change(fields).click()...etcetc
        // expect(handler).tohavebeencalledwith(...)
        render(<Form formname='geocode' callback={cb}/>)
        const locationInputEl = screen.getByRole('textbox', {name: /location/i })
        const submitEl = screen.getByRole('button', {type: 'submit'})

        // dateInputEl.value = "1938-12-22"
        fireEvent.change(locationInputEl, {
            target: {
                value: "1938-12-22asdfasdfasdfasdfasdfasfasdfasdfasdfasdf"
            }
        })

        fireEvent.click(submitEl)

        expect(cb).not.toHaveBeenCalled()

    })

    test("fire submit with valid data produces valid json", () => {
        const cb = jest.fn()

        // fireEvent.change(fields).click()...etcetc
        // expect(handler).tohavebeencalledwith(...)
        render(<Form formname='geocode' callback={cb}/>)
        const locationInputEl = screen.getByRole('textbox', {name: /location/i })
        const submitEl = screen.getByRole('button', {type: 'submit'})

        // dateInputEl.value = "1938-12-22"
        fireEvent.change(locationInputEl, {
            target: {
                value: "holywood"
            }
        })

        fireEvent.click(submitEl)

        expect(cb).toHaveBeenCalled()
    })


})