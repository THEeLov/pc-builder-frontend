import { Card } from "antd"
import { Component } from "../../models/components"
import "./view.css"

const ComponentView = ({ data, handleClose }: { data: Component; handleClose: () => void }) => {
    const excludedKeys = ["id", "componentId", "imageUrl"]

    const renderProperties = (data: Component) => {
        return Object.entries(data)
            .filter(([key, value]) => value !== null && value !== undefined && !excludedKeys.includes(key))
            .map(([key, value]) => {
                if (typeof value === "object" && !Array.isArray(value)) {
                    return Object.entries(value)
                        .filter(
                            ([subKey, subValue]) =>
                                subValue !== null && subValue !== undefined && !excludedKeys.includes(subKey),
                        )
                        .map(([subKey, subValue]) => (
                            <div key={subKey}>
                                <strong>{subKey}: </strong>
                                {subValue}
                            </div>
                        ))
                }
                return (
                    <div key={key}>
                        <strong>{key}: </strong>
                        {value}
                    </div>
                )
            })
    }

    return (
        <div className="component-view">
            {" "}
            <Card
                title={data.component?.name}
                style={{ width: "fit-content" }}
                extra={
                    <div onClick={handleClose} className="dialog__close-button">
                        <b>X</b>
                    </div>
                }
            >
                <div className="component-view__info-container">
                    {data.component?.imageUrl && (
                        <div className="component-view__image-container">
                            <img
                                alt={data.component.name}
                                src={data.component.imageUrl}
                                className="component-view__image"
                            />
                        </div>
                    )}
                    <div className="component-view__data">{renderProperties(data)}</div>
                </div>
            </Card>
        </div>
    )
}

export default ComponentView
