import {ACTIONS} from "../acion/fech"

export const initialState = {
    loading: true ,
    error: false,
    data: {},
}

export const fechReducer = (state,action) =>{
    switch (action.type) {
        case ACTIONS.SET_DATA:
            return{
                loading: false,
                error: false,
                data:  action.payload
                
            }

        case (ACTIONS.SET_ERROR):
            return {
                ...initialState,
                error: true,
                loading: false,

            }
        
        default:
            return state 

    }
}