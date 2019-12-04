import ActionType from "../common/models/action-type"

export interface UserState {
    userId: string,
    initialized: boolean,
    role: string
}

const initialState: UserState = {
    userId: '',
    initialized: false,
    role: ''
}

export function AuthenticationReducer(
    state = initialState,
    action: ActionType
): UserState {
    console.log(action)
    switch (action.type) {
        case 'UPDATE_USER': {
            console.log('heyF')
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}