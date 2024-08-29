import { Card } from "antd"
import { useForm, SubmitHandler } from "react-hook-form"
import { GpuSchema } from "../../validationSchemas/dialogs"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../Form/FormField"
import BaseForm from "../Form/BaseForm"
import { useDialog } from "../../hooks/useDialog"
import { useComponentsCreate } from "../../hooks/useComponents"
import { showSuccessNotification } from "../../utils/showNotfication"
import "./dialog.css"
import { gpuPowerConnectors, gpuInterfaces } from "./configTypes"
import SelectField from "../Form/SelectField"

type FormFields = z.infer<typeof GpuSchema>

const GpuCreateDialog = () => {
    const { mutateAsync: CreateGpu } = useComponentsCreate("gpus")
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(GpuSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
        const formData = new FormData()

        formData.append("component[name]", data.component.name)
        formData.append("component[price]", data.component.price.toString())
        formData.append("component[manufacturer]", data.component.manufacturer)
        formData.append("component[componentType]", "GPU")
        formData.append("image", data.image[0])
        formData.append("memory", data.memory.toString())
        formData.append("powerConnector", data.powerConnector)
        formData.append("interface", data.interface)
        formData.append("power", data.power.toString())

        console.log(formData)
        try {
            await CreateGpu(formData)
            showSuccessNotification("GPU created successfully")
            closeDialog()
        } catch (err) {
            // ignored for now maybe forever who knows
        }
    }

    return (
        <Card
            title="Create GPU"
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
                        <FormField
                            name="memory"
                            register={register}
                            type="number"
                            placeholder="124"
                            error={errors.memory}
                            label="Memory"
                        />
                        <SelectField
                            name="powerConnector"
                            register={register}
                            options={gpuPowerConnectors}
                            placeholder="Select..."
                            error={errors.powerConnector}
                            label="Power Connector"
                        />
                        <SelectField
                            name="interface"
                            register={register}
                            options={gpuInterfaces}
                            placeholder="Select.."
                            error={errors.interface}
                            label="Interface"
                        />
                        <FormField
                            name="power"
                            register={register}
                            type="number"
                            placeholder="power"
                            error={errors.power}
                            label="Power"
                        />
                    </div>
                </div>
                <button type="submit" className="form-button">
                    Create GPU
                </button>
            </form>
        </Card>
    )
}

export default GpuCreateDialog
