import useLocalStorageState from "use-local-storage-state"
import { useCallback } from "react"
import { User } from "../models/auth"

const AUTH_DATA_STORAGE_KEY = "authData"
const AUTH_DATA_DEFAULT = null

const useAuthData = () => {
    const [user, setUserData] = useLocalStorageState<User | null>(AUTH_DATA_STORAGE_KEY, {
        defaultValue: AUTH_DATA_DEFAULT,
    })

    const login = (newOrderData: User) => {
        setUserData(newOrderData)
    }

    const logout = useCallback(() => {
        setUserData(AUTH_DATA_DEFAULT)
    }, [setUserData])

    return {
        user,
        login,
        logout,
    }
}

export default useAuthData
