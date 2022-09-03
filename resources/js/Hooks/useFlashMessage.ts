import { useContext } from "react";
import { ContextApi } from "../Contexts/AppContext";

export default function useFlashMessage() {
    const [{ }, setAppState] = useContext(ContextApi)!;
    return ({ message, type }: { message: string, type: "success" | "info" | "warning" | "error" }) => setAppState(
        state => ({
            ...state,
            flashMessage: {
                message,
                type
            }
        })
    )
}
