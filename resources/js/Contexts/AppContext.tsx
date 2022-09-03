import React, { useState } from 'react'

type AppState = {
    auth: boolean,
    lang: string,
    flashMessage: {
        message: string,
        type: "success" | "info" | "warning" | "error",
    } | null,
}

export const ContextApi = React.createContext<[AppState, React.Dispatch<React.SetStateAction<AppState>>] | null>(null);

export default function AppContext({ children }: { children: JSX.Element }) {
    const [appState, setAppState] = useState<AppState>({
        auth: false,
        lang: 'en',
        flashMessage: null,
    })
    return (
        <ContextApi.Provider value={[appState, setAppState]}>
            {children}
        </ContextApi.Provider>
    )
}
