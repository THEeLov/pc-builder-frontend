// Done because of View function in Admin dashboard
// could be better i guess
export type Component = {
    component: {
        id: string
        name: string
        price: number
        imageUrl: string
    }
    id: string
    memory?: number
    powerConnector?: string
    interface?: string
    power?: number
    capacity?: number
    computerType?: string
    memoryType?: string
    busType?: string
    storageType?: string
    formFactor?: string
    powerOutput?: number
    efficiency?: string
    socket?: string
    ramSlots?: number
    ramType?: string
    gpuInterface?: string
    storageBusType?: string
    architecture?: string
    cores?: number
    threads?: number
    bits?: number
}

export type ComponentTypes =
    | "motherboards"
    | "processors"
    | "rams"
    | "storages"
    | "gpus"
    | "power-supplies"
    | "pc-cases"
    | ""
