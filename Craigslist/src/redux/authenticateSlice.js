import { createSlice } from "@reduxjs/toolkit";

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState: { user: null, password: null},
    reducers : {
        setCredentials: (state, action) => {
            const {user, password } = action.payload;
            state.user = user;
            state.password = password;
            console.log(state.user)
            console.log(state.password)
        },
        logOff: (state, action) => {
            state.user = null;
            state.password = null;
        }
    }
})

export const { setCredentials, logOff } = authenticateSlice.actions;

export default authenticateSlice.reducer;