import { Component } from "./components"

export type PartialConfig = {
    id: string
    configurationType: string
    motherboard?: Component
    processor?: Component
    rams: Component[]
    gpu?: Component
    storages: Component[]
    powerSupply?: Component
    pcCase?: Component
}

export type PartialConfigCreate = {
    configurationType: string
}

export type PartialConfigEdit = {
    motherboardId?: string
    processorId?: string
    gpuId?: string
    powerSupplyId?: string
    PCCaseId?: string
    ramId?: string
    storageId?: string
    delete: boolean
}
