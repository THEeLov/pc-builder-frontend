import { Component } from "../models/components"
import { PartialConfigEdit } from "@/models/configuration"

export function mapComponentToBody(name: string, record: Component, deleteValue: boolean): PartialConfigEdit {
    let body: PartialConfigEdit
    switch (name) {
        case "motherboards":
            body = { motherboardId: record.id, delete: deleteValue }
            break
        case "processors":
            body = { processorId: record.id, delete: deleteValue }
            break
        case "gpus":
            body = { gpuId: record.id, delete: deleteValue }
            break
        case "storages":
            body = { storageId: record.id, delete: deleteValue }
            break
        case "rams":
            body = { ramId: record.id, delete: deleteValue }
            break
        case "power-supplies":
            body = { powerSupplyId: record.id, delete: deleteValue }
            break
        default:
            body = { PCCaseId: record.id, delete: deleteValue }
            break
    }
    return body
}
