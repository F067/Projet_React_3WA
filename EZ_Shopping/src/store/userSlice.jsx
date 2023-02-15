import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profile: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateProfile (state, action){
            state.profile = action.payload
        },

    }
})

export const { updateProfile} = userSlice.actions