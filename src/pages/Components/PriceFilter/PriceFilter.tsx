import { Slider } from "antd"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./pricefilter.css"
import { useComponents } from "@/hooks/useComponents"
import { ComponentTypes } from "@/models/components"

const PriceFilter = ({ name }: { name: ComponentTypes }) => {
    const [searchParam, setSearchParams] = useSearchParams()

    const { data, isLoading } = useComponents(name, "")

    const maxPrice = data ? Math.ceil(Math.max(...data.map((component) => component.component.price))) : 1000

    const [rangeValues, setRangeValues] = useState(() => {
        const minPrice = Number(searchParam.get("minPrice") ?? "0")
        const maxPrice = Number(searchParam.get("maxPrice") ?? "400")
        return [minPrice, maxPrice]
    })

    const handlePriceChange = (values: number[]) => {
        setRangeValues(values)
        searchParam.set("minPrice", `${values[0]}`)
        searchParam.set("maxPrice", `${values[1]}`)
        setSearchParams(searchParam, {
            replace: true,
        })
    }

    return (
        <div className="filter--price">
            <h2>Price filter:</h2>
            <Slider
                range={{ draggableTrack: true }}
                defaultValue={rangeValues}
                min={0}
                max={maxPrice}
                onChangeComplete={handlePriceChange}
                step={10}
            />
            <div className="filter--price__range">
                <h2>{rangeValues[0]}€</h2>
                <h2>{rangeValues[1]}€</h2>
            </div>
        </div>
    )
}

export default PriceFilter
