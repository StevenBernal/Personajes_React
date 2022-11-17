export interface Subs {
        nick: string,
        subMonths: number,
        avatar: string,
        description?: string
}

export interface Task{
        map(arg0: (subFromApi: any) => { nick: any; subMonths: any; avatar: any; description: any }): Subs[]
        id: string,
        title: string,
        description: string,
        isCompleted: boolean
}

export interface AppState {
        subs: Subs[],
        newSubs: number
}