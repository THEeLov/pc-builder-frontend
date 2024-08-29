import { Card } from "antd"
import { useForm, SubmitHandler } from "react-hook-form"
import { MotherboardSchema } from "../../validationSchemas/dialogs"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../Form/FormField"
import BaseForm from "../Form/BaseForm"
import { useDialog } from "../../hooks/useDialog"
import { useComponentsCreate } from "../../hooks/useComponents"
import { showSuccessNotification } from "../../utils/showNotfication"
import "./dialog.css"
import SelectField from "../Form/SelectField"
import { formFactors, gpuInterfaces, ramTypes, sockets, storageBusTypes } from "./configTypes"

type FormFields = z.infer<typeof MotherboardSchema>

const MotherboardCreateDialog = () => {
    const { closeDialog } = useDialog()
    const { mutateAsync: CreateMotherboard } = useComponentsCreate("motherboards")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(MotherboardSchema),
    })

    // Looks like shit and i dont know how to make it cleaner
    const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
        const formData = new FormData()

        formData.append("component[name]", data.component.name)
        formData.append("component[price]", data.component.price.toString())
        formData.append("component[manufacturer]", data.component.manufacturer)
        formData.append("component[componentType]", "MOTHERBOARD")
        formData.append("image", data.image[0])
        formData.append("socket", data.socket)
        formData.append("formFactor", data.formFactor)
        formData.append("ramSlots", data.ramSlots.toString())
        formData.append("ramType", data.ramType)
        formData.append("gpuInterface", data.gpuInterface)
        formData.append("storageBusType", data.storageBusType)

        console.log(formData)
        try {
            await CreateMotherboard(formData)
            showSuccessNotification("Motherboard created successfully")
            closeDialog()
        } catch (err) {
            // ignored for now maybe forever who knows
        }
    }

    return (
        <Card
            title="Create Motherboard"
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
                            name="socket"
                            register={register}
                            options={sockets}
                            placeholder="Select..."
                            error={errors.socket}
                            label="Socket"
                        />
                        <SelectField
                            name="formFactor"
                            register={register}
                            options={formFactors}
                            placeholder="Select..."
                            error={errors.formFactor}
                            label="Form Factor"
                        />
                        <FormField
                            name="ramSlots"
                            register={register}
                            type="number"
                            placeholder="3"
                            error={errors.ramSlots}
                            label="Ram Slots"
                        />
                        <SelectField
                            name="ramType"
                            register={register}
                            options={ramTypes}
                            placeholder="Select..."
                            error={errors.ramType}
                            label="Ram Type"
                        />
                        <SelectField
                            name="gpuInterface"
                            register={register}
                            options={gpuInterfaces}
                            placeholder="Select..."
                            error={errors.gpuInterface}
                            label="GPU Interface"
                        />
                        <SelectField
                            name="storageBusType"
                            register={register}
                            options={storageBusTypes}
                            placeholder="Select..."
                            error={errors.storageBusType}
                            label="Storage Bus Type"
                        />
                    </div>
                </div>
                <button type="submit" className="form-button">
                    Create Motherbaord
                </button>
            </form>
        </Card>
    )
}

export default MotherboardCreateDialog
