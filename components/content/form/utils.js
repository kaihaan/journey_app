exports.validate = (fieldValidations, errObject) => {
    // refactor to utils!
    // const err = {}
    // utils.validate(validation, err)
    fieldValidations.forEach((v) => {

        let key = Object.keys(v)[0]
        let value = Object.values(v)[0]

        switch (key) {
            case ('maxlen'):
                if (event.target.value.length > value) {
                    errObject.isErr = true
                    errObject.errMessage = "Max length " + value + " characters"
                }
                break
            case ('minlen'):
                if (event.target.value.length < value) {
                    errObject.isErr = true
                    errObject.errMessage = "Min length " + value + " characters"
                }
                break
            case ('mustagree'):
                console.log('Checkbox val ', event.target.checked)
                if (event.target.checked === false) {
                    errObject.isErr = true
                    errObject.errMessage = "Must agree"
                }
                break
            case ('email'):
                // eslint-disable-next-line
                const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                // emailregex.test(String(event.target.value).toLowerCase())
                if (!emailregex.test(String(event.target.value).toLowerCase())) {
                    errObject.isErr = true
                    errObject.errMessage = "You have entered an invalid email address!"
                }
                break
            case ('geoloc'):
                // eslint-disable-next-line
                const georegex = /^(-?\d{1,2}(\.\d{0,7})?),\s*(-?\d{1,3}(\.\d{0,7})?)$/
                // add geoloc validation for format {0.0000000, 0.0000000}
                const geomatch = String(event.target.value).match(georegex)
                const [a, latStr, b, longStr] = geomatch ? geomatch : [null, null, null, null]
                console.log('data regex ', geomatch)
                if (!(latStr && longStr)) break

                let lat = parseFloat(latStr)
                let long = parseFloat(longStr)
                if (lat > 90 || lat < -90 || long > 180 || long < -180) {
                    errObject.isErr = true
                    errObject.errMessage = "Latitude [-90,90] ~ Longitude [-180, 180]"
                }
                break
            case ('dateFormat'):
                let dateregex
                switch (value) {
                    case ('YYYY-MM-DD'):
                        // eslint-disable-next-line
                        dateregex = /^((17|18|19|20)\d\d)[- \/.](0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])$/
                        break
                    default:
                        // eslint-disable-next-line
                        dateregex = /^((17|18|19|20)\d\d)[- \/.](0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])$/
                }

                const datematch = String(event.target.value).match(dateregex)
                if (!datematch) {
                    errObject.isErr = true
                    errObject.errMessage = "date should be YYYY-MM-DD"
                }
                break
            case ('link'):
                const linkregex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
                const linkmatch = String(event.target.value).match(linkregex)
                if (!linkmatch) {
                    errObject.isErr = true
                    errObject.errMessage = "link doesn't look valid"
                }
                break
            default:
                errObject.isErr = false
        }

    })
}