import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profile: {
        themeMode: "light"
    },
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateProfile(state, action) {
            state.profile = action.payload
        },
        userTheme(state, action) {
            state.themeMode = action.payload
        },
    }
})

export const { updateProfile, userTheme } = userSlice.actions