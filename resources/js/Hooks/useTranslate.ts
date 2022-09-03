import { useContext } from 'react';
import { ContextApi } from '../Contexts/AppContext';
export default function useTranslate() {
    const [appState, setAppState] = useContext(ContextApi)!
    const t = (ar:string, en:string) => {
        return appState.lang === 'en' ? en : ar;
    }
    return t;
}
