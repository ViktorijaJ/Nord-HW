export declare namespace UserLoginDataModel {
    export interface State {
        data: UserData
    }

    export interface RequestsState {
        isPendingUserLogin?: boolean
        userLoginError: string
    }

    export interface LoginData {
        username: string
        password: string
    }

    export interface UserData {
        token?: string
        message?: string
    }
}
