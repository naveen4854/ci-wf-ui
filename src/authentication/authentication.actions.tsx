import { UserState } from "./authentication.reducer";

export function initializeUser(userId: any) {
    return {
        type: 'UPDATE_USER',
        payload: {
            userId: 'naveen.kuthadi.consultant@nielsen.com',
            role: 'admin',
            initialized: true
        } as UserState
    }
}