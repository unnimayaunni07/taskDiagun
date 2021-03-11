import React from 'react'
import { UserSessionStore}  from './UserSessionStore'


function createRootStore(){
    const userSessionStore = new UserSessionStore()
    // const mainStore = new MainStore()

    return {
        userSessionStore: userSessionStore,
        // mainStore: mainStore
    }
}

const rootStore = createRootStore()

const storeContext = React.createContext(rootStore)

export const useStore = () => React.useContext(storeContext)