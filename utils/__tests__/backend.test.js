import { add, del, update, get, paged } from '../backend'
import mockAxios from 'axios'
import { Item } from '../../components/__mocks__/newitem'

describe("Test the AWS backend access utility functions", () => {


    // should reject if request badly formed
    // NO expects to be well formed 

    // should return useful err if no-connection error & timeout in reasonable time
    test("returns useful err message on timeout / no network", async () => {
        mockAxios.mockImplementationOnce((options)=> Promise.reject({name: "Get Failed", message: "Failed to get data from server - might be network problem"}))

        let error
        try {
            const resp = await add(Item)
        } catch (e) {
            // console.log(e)
            error = e
        }
        
        expect(error).toBeDefined

    })



    // should return if well formed request 
    test("fetches valid record on get", async () => {
        mockAxios.mockImplementationOnce((options)=> Promise.resolve({status: 200, data: 'returned data', options: options}))

        const resp = await add(Item)

        expect(resp).toHaveProperty('status')
        expect(resp).toHaveProperty('data')
        expect(resp).toHaveProperty('options')
        expect(resp).toHaveProperty('options.url')
        expect(resp).toHaveProperty('options.method')
        expect(resp).toHaveProperty('options.headers')
    })
})