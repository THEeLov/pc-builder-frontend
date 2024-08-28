import { useMutation } from "@tanstack/react-query"
import { LoginUser, RegisterUser } from "@/models/auth"

import AuthApi from "../api/authApi"

export const useLogin = () => {
    const { mutateAsync } = useMutation({
        mutationFn: (payload: LoginUser) => AuthApi.loginUser(payload),
    })

    return { mutateAsync }
}

export const useRegister = () => {
    const { mutateAsync } = useMutation({
        mutationFn: (payload: RegisterUser) => AuthApi.registerUser(payload),
    })

    return { mutateAsync }
}
