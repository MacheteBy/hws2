import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let newState = [...state]
            if(action.payload === 'up'){
                newState.sort((a: any, b: any) => a.name > b.name ? 1 : -1)
            }
            if(action.payload === 'down'){
                newState.sort((a: any, b: any) => a.name < b.name ? 1 : -1)
            }
            console.log(newState)
            return newState // need to fix
        }
        case 'check': {
            return  [...state].filter((t: any) => t.age >= action.payload)// need to fix
        }
        default:
            return state
    }
}
