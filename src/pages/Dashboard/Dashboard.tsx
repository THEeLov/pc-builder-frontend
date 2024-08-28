import CustomButton from "@/components/CustomButton/CustomButton"
import { useState } from "react"
import { ComponentTypes } from "@/models/components"
import DashboardTable from "./DashboardTable"
import "./dashboard.css"

const components = ["Motherboards", "Processors", "Rams", "GPUs", "Storages", "Power-Supplies", "Pc-Cases"]

const Dashboard = () => {
    const [currentComponent, setCurrentComponent] = useState<ComponentTypes>("motherboards")

    const handleClick = (component: string) => {
        setCurrentComponent(component as ComponentTypes)
    }

    console.log(currentComponent)
    return (
        <div className="dashboard">
            <div className="dashboard__headline">
                <h1>Dashboard</h1>
            </div>
            <div className="dashboard__component-selectors">
                {components.map((component) => (
                    <div key={component} onClick={() => handleClick(component.toLocaleLowerCase())}>
                        <CustomButton label={component} btype="secondary" />
                    </div>
                ))}
            </div>
            <DashboardTable name={currentComponent} isDashboard={true} params="" name2={currentComponent} />
        </div>
    )
}

export default Dashboard
