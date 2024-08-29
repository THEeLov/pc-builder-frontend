import PriceFilter from "./PriceFilter/PriceFilter"
import { ComponentTypes } from "../../models/components"
import { useSearchParams } from "react-router-dom"
import "./components.css"
import { useState } from "react"
import CustomButton from "../../components/CustomButton/CustomButton"
import DashboardTable2 from "../Dashboard/DashboardTable2"

const components = ["Motherboards", "Processors", "Rams", "GPUs", "Storages", "Power-Supplies", "Pc-Cases"]

const Components = () => {
    const [searchParams] = useSearchParams()

    const queryParams = new URLSearchParams(searchParams).toString()
    const componentParam = searchParams.get("component")
    const [currentComponent, setCurrentComponent] = useState<ComponentTypes>("motherboards")

    const handleClick = (component: string) => {
        setCurrentComponent(component as ComponentTypes)
    }

    return (
        <div className="components">
            <div className="components__filter-container">
                <div className="filter--headline">
                    <h1>Filters</h1>
                </div>
                <div className="filter--filters">
                    <PriceFilter name={currentComponent} />
                </div>
            </div>
            <div className="dashboard">
                {componentParam === null && (
                    <div className="dashboard__component-selectors">
                        {components.map((component) => (
                            <div onClick={() => handleClick(component.toLocaleLowerCase())} key={component}>
                                <CustomButton label={component} btype="secondary" />
                            </div>
                        ))}
                    </div>
                )}
                <DashboardTable2
                    name={componentParam == null ? currentComponent : (componentParam as ComponentTypes)}
                    isDashboard={componentParam == null ? false : true}
                    params={queryParams}
                    name2={componentParam == null ? currentComponent : (componentParam as ComponentTypes)}
                />
            </div>
        </div>
    )
}

export default Components
