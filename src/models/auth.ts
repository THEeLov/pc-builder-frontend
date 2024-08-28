export type User = {
    id: string
    username: string
    email: string
    role: string
}
export type RegisterUser = Omit<User, "id" | "role"> & {
    password: string
}

export type LoginUser = Pick<User, "email"> & {
    password: string
}
