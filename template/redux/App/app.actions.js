// App actions

import { 
  SET_ERROR,
  TOGGLE_MENU
} from './app.types'


export const setError = (_errorObj) => {
	return {
	    type: SET_ERROR,
	    payload: _errorObj
	}
}

export const toggleMenu = () => {
	return {
	    type: TOGGLE_MENU,
	}
}