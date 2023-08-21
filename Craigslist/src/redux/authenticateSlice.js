import { createSlice } from "@reduxjs/toolkit";

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState: { user: null, token: null},
    reducers : {
        setCredentials: (state, action) => {
            const payload = action.payload;
            state.user = payload.username;
            state.token = payload.token;
            console.log(`payload: ${JSON.stringify(payload)}`);
        },
        logOff: (state, action) => {
            state.user = null;
            state.token = null;
        }
    }
})

export const { setCredentials } = authenticateSlice.actions;

export default authenticateSlice.reducer;

export const selectCurrentUser = (state) => state.authenticate.user;
export const selectCurrentToken = (state) => state.authenticate.token;
