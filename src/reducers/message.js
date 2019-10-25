import { ADD_MESSAGES } from "../actions"

export default function message (state =[], action ={}) {
  console.log("reducers", state, "action", action.type, 'pl', action.payload)
    switch(action.type){
        case ADD_MESSAGES:
            return action.payload
        
        default:
            return state
    }
} 