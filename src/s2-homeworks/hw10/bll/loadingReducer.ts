import { Dispatch } from "redux"

const initState = {
    isLoading: false,
}

type ActionsType = loadingACType

export type loadingACType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionsType): any => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            console.log(state.isLoading)
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})