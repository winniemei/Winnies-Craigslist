import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOff } from './authenticateSlice'

const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}/posts`,
    credentials: 'include',
    prepareHeaders: (headers, { getState}) => {
        const token = getState().authenticate.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, otherOptions) => {
    let result = await baseQuery(args, api, otherOptions)
    if (result?.data) {
        const user = api.getState().auth.user;
        api.dispatch(setCredentials({ ...result.data, user }));
        result = await baseQuery(args, api, otherOptions);
    } else {
        api.dispatch(logOut())
    }
    return result;
}