import { useReducer } from "react"
import { FormState } from "../Backend/interfaces/form.interfaces"
import { InitialState } from "../Backend/state/initial.state"

type FormReducerAction = {
    type: "change_value",
    payload: {
      inputName: string,
      inputValue: string
      }  
  } | {
    type: 'clear'     
  }

export const formReducer = (state: FormState["inputValues"], action: FormReducerAction ) => {
    switch (action.type) {
      case "change_value":
        const { inputName, inputValue } = action.payload
        return {
          ...state,
          [inputName]: inputValue
        } 
      case 'clear': 
        return InitialState
      }
    }

export const useNewSubForm = () =>{
    return useReducer(formReducer, InitialState)
}