import { Card } from "antd"
import { useForm, SubmitHandler } from "react-hook-form"
import { StorageSchema } from "../../validationSchemas/dialogs"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../Form/FormField"
import BaseForm from "../Form/BaseForm"
import { useDialog } from "../../hooks/useDialog"
import { useComponentsCreate } from "@/hooks/useComponents"
import { showSuccessNotification } from "@/utils/showNotfication"
import "./dialog.css"
import SelectField from "../Form/SelectField"
import { storageBusTypes, storageTypes } from "./configTypes"

type FormFields = z.infer<typeof StorageSchema>

const StorageCreateDialog = () => {
    const { mutateAsync: CreateStorage } = useComponentsCreate("storages")
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(StorageSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
        const formData = new FormData()

        formData.append("component[name]", data.component.name)
        formData.append("component[price]", data.component.price.toString())
        formData.append("component[manufacturer]", data.component.manufacturer)
        formData.append("component[componentType]", "STORAGE")
        formData.append("image", data.image[0])
        formData.append("storageType", data.storageType)
        formData.append("capacity", data.capacity.toString())
        formData.append("busType", data.busType)

        console.log(formData)
        try {
            await CreateStorage(formData)
            showSuccessNotification("Storage created successfully")
            closeDialog()
        } catch (err) {
            // ignored for now maybe forever who knows
        }
    }

    return (
        <Card
            title="Create Storage"
            style={{ width: "fit-content" }}
            extra={
                <div onClick={closeDialog} className="dialog__close-button">
                    <b>X</b>
                </div>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="dialog-form">
                    <BaseForm register={register} errors={errors} />
                    <div className="dialog-form__grid--second">
                        <SelectField
                            name="storageType"
                            register={register}
                            options={storageTypes}
                            placeholder="Select..."
                            error={errors.storageType}
                            label="Storage Type"
                        />
                        <FormField
                            name="capacity"
                            register={register}
                            type="number"
                            placeholder="512"
                            error={errors.capacity}
                            label="Capacity"
                        />
                        <SelectField
                            name="busType"
                            register={register}
                            options={storageBusTypes}
                            placeholder="SATA"
                            error={errors.busType}
                            label="Bus Type"
                        />
                    </div>
                </div>
                <button type="submit" className="form-button">
                    Create Storage
                </button>
            </form>
        </Card>
    )
}

export default StorageCreateDialog
