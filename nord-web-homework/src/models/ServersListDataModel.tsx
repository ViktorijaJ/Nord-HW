export declare namespace ServersListDataModel {
    export interface State {
        serversList: ServersListDataItem[]
    }

    export interface RequestsState {
        isPendingUserLogin?: boolean
        userLoginError: string
    }

    export interface ServersListDataItem {
        name: string
        distance: number
    }
}
