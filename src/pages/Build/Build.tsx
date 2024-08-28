import CustomButton from "../../components/CustomButton/CustomButton"
import { PlusOutlined } from "@ant-design/icons"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { usePartialConfig } from "@/hooks/usePartialConfig"
import { Component } from "../../models/components"
import useAuthData from "../../hooks/useAuthData"
import ComponentInfo from "./ComponentInfo"
import notification from "antd/es/notification"
import "./build.css"

const Build = () => {
    const navigate = useNavigate()
    const { user } = useAuthData()

    // It's guranteed that user is logged in
    const { data, isLoading } = usePartialConfig(user?.id ?? "")

    const [info, setInfo] = useState<Array<{ name: string; info: Array<Component | null> }>>([])
    const [totalPrice, setTotalPrice] = useState(0)

    const componentInfo = useMemo(() => {
        if (!data) {
            return []
        }
        const infoArray: Array<{ name: string; info: Array<Component | null> }> = [
            { name: "Motherboard", info: [data?.motherboard ?? null] },
            { name: "Processor", info: [data?.processor ?? null] },
            { name: "Ram", info: [...data.rams, null] },
            { name: "GPU", info: [data?.gpu ?? null] },
            { name: "Storage", info: [...data.storages, null] },
            { name: "Power-Supplie", info: [data?.powerSupply ?? null] },
            { name: "Pc-Case", info: [data?.pcCase ?? null] },
        ]

        return infoArray
    }, [data])

    useEffect(() => {
        setInfo(componentInfo)

        const price = componentInfo.reduce((acc, component) => {
            if (component.info && component.info.some((item) => item !== null)) {
                return acc + component.info.reduce((subAcc, item) => subAcc + (item?.component.price ?? 0), 0)
            } else {
                return acc
            }
        }, 0)

        setTotalPrice(parseFloat(price.toFixed(2)))
    }, [componentInfo])

    if (data === null) {
        notification.error({
            message: "Ooops!",
            description: "Please select configuration first!",
            duration: 2,
        })
        navigate("/options")
    }

    return (
        <div className="build">
            <div className="build__headline">
                <h1>Part Picker</h1>
            </div>
            <div className="build__components-container">
                <div className="build__components">
                    {isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        info.map((component, index) => (
                            <div key={index} className="build__component">
                                <div className="component__name">
                                    <h2>{component.name}</h2>
                                </div>
                                {component.info.map((componentInfo, subIndex) => (
                                    <div key={subIndex} className="component__info">
                                        {componentInfo ? (
                                            <ComponentInfo
                                                componentInfo={componentInfo}
                                                name={component.name.toLocaleLowerCase() + "s"}
                                            />
                                        ) : (
                                            <Link to={`/components?component=${component.name.toLocaleLowerCase()}s`}>
                                                <CustomButton label="Add" btype="primary" icon={<PlusOutlined />} />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))
                    )}
                </div>
                <div className="build__amount">
                    <h2>Total price: {totalPrice} €</h2>
                </div>
            </div>
        </div>
    )
}

export default Build
