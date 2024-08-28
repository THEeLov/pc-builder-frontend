import { Card } from "antd"
import { useForm, SubmitHandler } from "react-hook-form"
import { PowerSupplySchema } from "../../validationSchemas/dialogs"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../Form/FormField"
import BaseForm from "../Form/BaseForm"
import { useDialog } from "../../hooks/useDialog"
import { useComponentsCreate } from "@/hooks/useComponents"
import { showSuccessNotification } from "@/utils/showNotfication"
import "./dialog.css"
import { formFactors, powerSupplyEfficiencies } from "./configTypes"
import SelectField from "../Form/SelectField"

type FormFields = z.infer<typeof PowerSupplySchema>

const PowerSupplyCreateDialog = () => {
    const { mutateAsync: CreatePowerSupply } = useComponentsCreate("power-supplies")
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(PowerSupplySchema),
    })

    const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
        const formData = new FormData()

        formData.append("component[name]", data.component.name)
        formData.append("component[price]", data.component.price.toString())
        formData.append("component[manufacturer]", data.component.manufacturer)
        formData.append("component[componentType]", "POWERSUPPLY")
        formData.append("image", data.image[0])
        formData.append("powerOutput", data.powerOutput.toString())
        formData.append("efficiency", data.efficiency)
        formData.append("formFactor", data.formFactor)

        console.log(formData)
        try {
            await CreatePowerSupply(formData)
            showSuccessNotification("Power-Supply created successfully")
            closeDialog()
        } catch (err) {
            // ignored for now maybe forever who knows
        }
    }

    return (
        <Card
            title="Create Power-Supply"
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
                            name="powerOutput"
                            register={register}
                            type="number"
                            placeholder="125"
                            error={errors.powerOutput}
                            label="Power Output"
                        />
                        <SelectField
                            name="efficiency"
                            register={register}
                            options={powerSupplyEfficiencies}
                            placeholder="Select..."
                            error={errors.efficiency}
                            label="Efficiency"
                        />
                        <SelectField
                            name="formFactor"
                            register={register}
                            options={formFactors}
                            placeholder="Select..."
                            error={errors.formFactor}
                            label="Form Factor"
                        />
                    </div>
                </div>
                <button type="submit" className="form-button">
                    Create Power-Supply
                </button>
            </form>
        </Card>
    )
}

export default PowerSupplyCreateDialog
