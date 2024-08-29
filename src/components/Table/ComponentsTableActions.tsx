import React from "react"
import { FaEye } from "react-icons/fa"
import { Component } from "../../models/components"
import CustomButton from "../CustomButton/CustomButton"
import { showLoginNotification } from "../../utils/showNotfication"

interface TableActionsProps {
    record: Component
    setOpenView: React.Dispatch<React.SetStateAction<boolean>>
    setComponentId: React.Dispatch<React.SetStateAction<string>>
    loggedIn: boolean
}

const ComponentsTableActions: React.FC<TableActionsProps> = ({ record, setOpenView, setComponentId, loggedIn }) => {
    const handleView = () => {
        if (!loggedIn) {
            showLoginNotification("Please log in to view component details")
            return
        }
        setComponentId(record.id)
        setOpenView(true)
    }

    return (
        <div className="table-buttons">
            <span onClick={handleView}>
                <CustomButton label="" btype="secondary" icon={<FaEye />} />
            </span>
        </div>
    )
}

export default ComponentsTableActions
