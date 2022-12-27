// app.js

import { 
  SET_ERROR, 
  TOGGLE_MENU 
} from './app.types'

const initialState = {
  // Error State
  show_error: false,
  error_message: "",
  error_title: "",
  error_code: 0,
  error_callback: ()=>{},

  // Menu State
  menu_open: false,

  // Loading State
  loading: false
}

export default function appReducer(state = initialState, action) {

  //let updatedState = JSON.parse(JSON.stringify(state));

  switch(action.type) {

    case SET_ERROR: {
      return {
        ...state,
        show_error: action.payload.show_error,
        error_message: action.payload.error_message,
        error_message: action.payload.error_title,
        error_code: action.payload.error_code,
        error_callback: action.payload.error_callback
      }
    }

    case TOGGLE_MENU: {
      return {
        ...state,
        menu_open: !state.menu_open,
      }
    }

    default:
      return state

  }

  return state

}

