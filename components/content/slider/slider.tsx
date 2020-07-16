import { useState, useRef, useEffect } from 'react'

import { StyledSlider } from './styled.slider'

export default ({ getValue, initialVal = 1850 }: { getValue?: (n: number) => number, initialVal?: number }) => {

    const [value, setValue] = useState(initialVal)

    const timerRef = useRef(null)

    const handleChange = (event) => {
        setValue(event.target.value)

        if (timerRef.current) {
            clearTimeout(timerRef.current)
            timerRef.current = null
        }

        timerRef.current = setTimeout(() => {
            getValue(value)
            console.log('Timeout!!')
        }, 200)
    }

    useEffect(()=> {
        console.log('UseEffect')
        return clearTimeout(timerRef.current)
    }, [])



    return (
        <StyledSlider>
            <div className="slidecontainer">
                <input type="range" min="1817" max="1892" onChange={handleChange} value={value} className="slider" id="slider" />
                <output htmlFor="slider" id="output" name="x" >{value}</output>
            </div>
        </StyledSlider>
    )
}