import axios from 'axios'


const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

let REQUEST_USER_DATA = 'REQUEST_USER_DATA'
// created action type

export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user
            return { email, firstName, lastName }
        default:
        return state
    }    
}

export default userReducer