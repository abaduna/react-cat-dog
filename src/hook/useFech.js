

import {useCallback, useEffect,useReducer} from "react"
import {API} from "../API"
import { fechReducer, initialState } from "../reducer/fech";
import { ACTIONS } from "../acion/fech"

export const useFech = (endpoint= "search?limit=10") =>{
    const [state,dispach] = useReducer(fechReducer,initialState)


    const getData = useCallback( async()=>{
        try {
            const {data} = await API.get(`${endpoint}`) 
            dispach({type:ACTIONS.SET_DATA,payload:data})
            console.log(data);            
        } catch (e) {
            console.error(e)
            dispach({type:ACTIONS.SET_ERROR})
        }

    },[endpoint])

    useEffect(()=>{
        getData()
    },[endpoint,getData])

    return state
}

