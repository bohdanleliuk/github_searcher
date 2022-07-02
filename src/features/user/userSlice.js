import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findUser, findUsers} from "../../utils/GitHubUtil";

const initialState = {
    searchTerm: '',
    users: [],
    loadingUsers: false,
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (term,{rejectWithValue, dispatch}) => {
        const users = await findUsers(term)
        const usersWithMoreInf = await Promise.all(users.map(async (value) => {
            value = await findUser(value.login)
            return value
        }))
        dispatch(setUsers(usersWithMoreInf))
    }
    )

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        clearUsers: (state) => {
            state.users = []
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    },
    extraReducers: {
        [getUsers.fulfilled]: (state) => {state.loadingUsers = false},
        [getUsers.pending]: (state) => {state.loadingUsers = true},
        [getUsers.rejected]: (state) => {state.loadingUsers = false},
    }
})

export const {setUsers, clearUsers, setSearchTerm} = userSlice.actions

export default userSlice.reducer

