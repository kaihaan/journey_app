// use axios or node fetch to manage backend from AWS
import axios from 'axios'

const USER_NAME = 'Kaihaan'
const USER_ID = '123'
// CRUD on AWS backend
// add, delete, get-one, get-page, update

// endpoints:
//   POST - https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/event
//   PATCH - https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/event
//   GET - https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/paged
//   GET - https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/event
//   DELETE - https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/delete

// HASH - Subject (sent by caller)
// SORT - date:timestamp (created by API from Date sent by caller)

// could reuse validation utils in form module...  if refactored!!

// expects __mocks__ newitem.json
export function add (data) {

    // could check if well formed
    // if (key in obj)
    // but dont bother for now...

    // OR BETTER - convert to ts and define expected types :-) 

    const options = {
        url: 'https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/event',
        method: 'POST',
        timeout: 4000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'app_user_id': USER_ID,
            'app_user_name': USER_NAME
        },
        data: data
    }

    return axios(options).then(resp => resp).catch(err=> Promise.reject(err))

}


// expects __mocks__ updateitem.json
export function update (data) {

    const options = {
        url: 'https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/event',
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'app_user_id': USER_ID,
            'app_user_name': USER_NAME
        },
        data: data
    }

    return axios(options).then(resp => resp).catch(err=> Promise.reject(err))
}

// KEY in query : ?subject=Bahaullah&datetimestamp=1817-11-12:1594660747432
export function get (subject, datetimestamp) {

    const options = {
        url: `https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/event?subject=${subject}&datetimestamp=${datetimestamp}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'app_user_id': USER_ID,
            'app_user_name': USER_NAME
        },
        data: data
    }

    return axios(options).then(resp => resp).catch(err=> Promise.reject(err))
}


// KEYs in query : ?hash=Bahaullah&start=1817-11-12:1594658797149&end=1817-11-12:1594658828405
// if paaged on from last call: ?hash=Bahaullah&start=1817-11-12:1594658797149&end=1817-11-12:1594658828405&last=1817-11-12:1594658815398
export function paged (subject, start, end, lastdatetimestamp) {

    const options = {
        url: `https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/paged?hash=${subject}&start=${start}&end=${end}&last=${lastdatetimestamp}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'app_user_id': USER_ID,
            'app_user_name': USER_NAME
        },
        data: data
    }

    return axios(options).then(resp => resp).catch(err=> Promise.reject(err))
}


// KEYs in query : ?subject=Bahaullah&datetimestamp=1817-11-12:1594660747432
export function del (subject, datetimestamp) {

    const options = {
        url: `https://lu154qt6ph.execute-api.eu-west-2.amazonaws.com/dev/delete?subject=${subject}&datetimestamp=${datetimestamp}`,
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'app_user_id': USER_ID,
            'app_user_name': USER_NAME
        },
        data: data
    }

    return axios(options).then(resp => resp).catch(err=> Promise.reject(err))
}

