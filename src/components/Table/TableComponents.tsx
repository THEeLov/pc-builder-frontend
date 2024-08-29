import type { TableColumnsType } from "antd"
import { Table } from "antd"
import { useSearch } from "../../hooks/useSearch"
import { useComponent } from "../../hooks/useComponents"
import { Component, ComponentTypes } from "../../models/components"
import { useState } from "react"
import ComponentView from "../ComponentView/ComponentView"
import TableActions from "./TableActions"
import "./table.css"
import useAuthData from "../../hooks/useAuthData"
import ComponentsTableActions from "../../components/Table/ComponentsTableActions"

type DataIndex = keyof Component["component"]

type TableComponentsProps = {
    fetchedData: Component[]
    admin: boolean
    name: ComponentTypes
    isDashboard: boolean
}

const TableComponents: React.FC<TableComponentsProps> = ({ fetchedData, admin, name, isDashboard }) => {
    const { user } = useAuthData()
    const [openView, setOpenView] = useState(false)
    const [componentId, setComponentId] = useState("")

    const { data } = useComponent(name, componentId)

    const { getColumnSearchProps } = useSearch()

    const columns: TableColumnsType<Component> = [
        {
            title: "Image",
            dataIndex: ["component", "imageUrl"],
            key: "component.image",
            render: (imageUrl) => <img src={imageUrl} alt="Component" style={{ width: "70px", height: "70px" }} />,
        },
        {
            title: "Name",
            dataIndex: ["component", "name"],
            key: "component.name",
            onFilter: (value, record) => record.component.name.indexOf(value as string) === 0,
            sorter: (a, b) => a.component.name.toLocaleLowerCase().localeCompare(b.component.name.toLocaleLowerCase()),
            ...getColumnSearchProps("name" as DataIndex),
        },
        {
            title: "Price (€)",
            dataIndex: ["component", "price"],
            key: "component.price",
            sorter: (a, b) => a.component.price - b.component.price,
        },
        {
            title: "Action",
            dataIndex: "",
            key: "add",
            render: (record: Component) =>
                isDashboard ? (
                    <TableActions
                        record={record}
                        admin={admin}
                        name={name}
                        setOpenView={setOpenView}
                        setComponentId={setComponentId}
                        loggedIn={user !== null}
                    />
                ) : (
                    <ComponentsTableActions
                        record={record}
                        setOpenView={setOpenView}
                        setComponentId={setComponentId}
                        loggedIn={user !== null}
                    />
                ),
            align: "right",
            width: "10%",
        },
    ]

    const handleCloseView = () => {
        setOpenView(false)
    }

    const dataSourceWithKeys = fetchedData.map((item) => ({
        ...item,
        key: item.id,
    }))

    return (
        <>
            <Table
                columns={columns}
                scroll={{ x: 480 }}
                pagination={{ position: ["none", "bottomCenter"] }}
                dataSource={dataSourceWithKeys}
            />
            {openView && data && <ComponentView data={data} handleClose={handleCloseView} />}
        </>
    )
}

export default TableComponents
