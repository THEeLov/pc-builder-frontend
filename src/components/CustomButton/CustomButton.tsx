import { Button, ConfigProvider } from "antd"
import { ReactNode } from "react"

type ButtonProps = {
    label: string
    btype: "primary" | "secondary" | "special"
    icon?: ReactNode
}

type ButtonType = "primary" | "secondary" | "special"
type ButtonArgs = {
    colorText: string
    colorPrimary: string
    colorBgContainer: string
}

const CustomButton = ({ label, icon, btype }: ButtonProps) => {
    const buttonTypeStyles: Map<ButtonType, ButtonArgs> = new Map([
        [
            "primary",
            {
                colorText: "white",
                colorPrimary: "white",
                colorBgContainer: "black",
            },
        ],
        [
            "secondary",
            {
                colorText: "black",
                colorPrimary: "black",
                colorBgContainer: "inherit",
            },
        ],
        [
            "special",
            {
                colorText: "purple",
                colorPrimary: "red",
                colorBgContainer: "inherit",
            },
        ],
    ])

    const buttonStyle = buttonTypeStyles.get(btype)

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: `${buttonStyle?.colorText}`,
                    colorPrimary: `${buttonStyle?.colorPrimary}`,
                    borderRadius: 4,

                    colorBgContainer: `${buttonStyle?.colorBgContainer}`,
                    colorBorder: "black",
                    fontSize: 18,
                    fontFamily: "Cairo Play",
                },
            }}
        >
            <Button type="default" size="large" icon={icon}>
                {label}
            </Button>
        </ConfigProvider>
    )
}

export default CustomButton
