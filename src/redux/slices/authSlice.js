import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token")
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredential(state, action) {
            const { token } = action.payload
            const { user } = jwtDecode(token)
            localStorage.setItem("user", user)
            localStorage.setItem("token", token)
        },
        logout(state, action) {
            state.user = null
            state.token = null
            localStorage.clear()
        }
    }
})

export const { setCredential } = authSlice.actions
export default authSlice.reducer