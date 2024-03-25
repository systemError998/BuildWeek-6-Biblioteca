import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const endPointPreferiti="/api/author"

const initialState={
    listaPreferiti:[],
    error:"",
    loading: false
}

//primo parametro nome azione/ oprerazione che vuoi eseguire fetch, parametro 2 operazione async

export const getPreferiti =
    createAsyncThunk("Preferiti/fetch", async()=>{
       return axios.get(endPointPreferiti).then(response=> {console.log(response);return response.data}).catch(error=>console.log(error));
    })


export const PreferitiSlice = createSlice(
    {
        name: "authors",
        initialState: initialState,
        reducers:{            
        },
        extraReducers: (builder)=> {
            builder
                .addCase(getPreferiti.pending,(state,action)=>{
                    state.loading=true
                })
                .addCase(getPreferiti.rejected,(state,action)=>{
                    state.error=action.error.message
                    state.loading=false
                })
                .addCase(getPreferiti.fulfilled,(state,action)=>{
                    state.listaPreferiti=action.payload
                    state.loading=false
        })
    }
})

const {reducer,actions}=PreferitiSlice;
export default reducer