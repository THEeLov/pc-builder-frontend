import { notification } from "antd"

export const showLoginNotification = (message: string) => {
    notification.error({
        message: "Ooops!",
        description: `${message}`,
        duration: 2.5,
    })
}

export const showSuccessNotification = (message: string) => {
    notification.success({
        message: "Success!",
        description: `${message}`,
        duration: 3,
    })
}
