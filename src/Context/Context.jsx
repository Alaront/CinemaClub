import {createContext, useReducer} from "react";

export const CustomFilmContext = createContext();

const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'CHANGE_NAME' :
            return {
                ...state,
                name: payload,
            }
        case 'CHANGE_FILMS' :
            return {
                ...state,
                allFilms: payload,
            }
        case 'CHANGE_TYPE' :
            return {
                ...state,
                type: payload,
            }
        case 'CHANGE_PAGE' :
            return {
                ...state,
                page: payload,
            }
        case 'CHANGE_IS_SEARCH' :
            return {
                ...state,
                isSearch: payload,
            }
        case 'CHANGE_TOTAL_RESULT' :
            return {
                ...state,
                total: payload,
            }
        default :
            return {
                ...state
            }
    }
}

const initialState = {
    name: 'Matrix',
    allFilms: [],
    type: '',
    page: 1,
    isSearch: false,
    totalResults: 0
}

export const Context = props => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.changeName = (name) => {
        dispatch({type: 'CHANGE_NAME', payload: name})
    }

    value.setAllFilms  = data => {
        dispatch({type: 'CHANGE_FILMS', payload: data})
    }

    value.setType  = type => {
        dispatch({type: 'CHANGE_TYPE', payload: type})
    }

    value.setPage  = page => {
        dispatch({type: 'CHANGE_PAGE', payload: page})
    }

    value.setIsSearch  = flagState => {
        dispatch({type: 'CHANGE_IS_SEARCH', payload: flagState})
    }

    value.setTotalResults  = total => {
        dispatch({type: 'CHANGE_TOTAL_RESULT', payload: total})
    }

    return <CustomFilmContext.Provider value={value}>
        {props.children}
    </CustomFilmContext.Provider>
}