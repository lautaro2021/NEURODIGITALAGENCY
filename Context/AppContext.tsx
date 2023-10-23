import React, {createContext, useState, ReactNode} from 'react'

type AppContextType = {
    isLoading: boolean,
    setIsLoading: (isLoading:boolean) => void;
    delay: number,
}

const initialAppState: AppContextType = {
    isLoading: false,
    setIsLoading: () => {},
    delay: 3.5,
}

type AppProviderType = {
    children: ReactNode;
}

export const AppProvider:any = ({children}:AppProviderType) => {
    const [isLoading, setIsLoading] = useState(false);
    const delay = 3.5;
    const state = {isLoading, setIsLoading, delay};

    return (
        <AppContext.Provider value = {state}>
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = createContext<any>(initialAppState);