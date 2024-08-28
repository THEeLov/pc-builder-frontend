import { z } from "zod"

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

const nonEmptyString = z.string().min(1, { message: "This field is required" })
const positiveNumber = z.coerce.number().min(1, { message: "Value must be a positive number" })

const imageUrlSchema = z
    .any()
    .refine((files) => {
        return files?.[0]?.size <= MAX_FILE_SIZE
    }, `Max image size is 5MB.`)
    .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported.",
    )

const ComponentSchema = z.object({
    name: nonEmptyString,
    price: positiveNumber,
    manufacturer: nonEmptyString,
})

export const MotherboardSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    socket: nonEmptyString,
    formFactor: nonEmptyString,
    ramSlots: positiveNumber,
    ramType: nonEmptyString,
    gpuInterface: nonEmptyString,
    storageBusType: nonEmptyString,
})

export const ProcessorSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    architecture: nonEmptyString,
    cores: positiveNumber,
    threads: positiveNumber,
    bits: positiveNumber,
    socket: nonEmptyString,
})

export const RamSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    computerType: nonEmptyString,
    memoryType: nonEmptyString,
    capacity: positiveNumber,
})

export const PowerSupplySchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    powerOutput: positiveNumber,
    efficiency: nonEmptyString,
    formFactor: nonEmptyString,
})

export const PcCaseSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    formFactor: nonEmptyString,
})

export const StorageSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    storageType: nonEmptyString,
    capacity: positiveNumber,
    busType: nonEmptyString,
})

export const GpuSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    memory: positiveNumber,
    powerConnector: nonEmptyString,
    interface: nonEmptyString,
    power: positiveNumber,
})
