import { Card } from "antd"
import { useForm, SubmitHandler } from "react-hook-form"
import { PcCaseSchema } from "../../validationSchemas/dialogs"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import BaseForm from "../Form/BaseForm"
import { useDialog } from "../../hooks/useDialog"
import { useComponentsCreate } from "../../hooks/useComponents"
import { showSuccessNotification } from "../../utils/showNotfication"
import "./dialog.css"
import { formFactors } from "./configTypes"
import SelectField from "../Form/SelectField"

type FormFields = z.infer<typeof PcCaseSchema>

const PcCaseCreateDialog = () => {
    const { mutateAsync: CreatePcCase } = useComponentsCreate("pc-cases")
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(PcCaseSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
        const formData = new FormData()

        formData.append("component[name]", data.component.name)
        formData.append("component[price]", data.component.price.toString())
        formData.append("component[manufacturer]", data.component.manufacturer)
        formData.append("component[componentType]", "PCCASE")
        formData.append("image", data.image[0])
        formData.append("formFactor", data.formFactor)

        console.log(formData)
        try {
            await CreatePcCase(formData)
            showSuccessNotification("Pc-Case created successfully")
            closeDialog()
        } catch (err) {
            // ignored for now maybe forever who knows
        }
    }

    return (
        <Card
            title="Create Pc-Case"
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
                    Create Pc-Case
                </button>
            </form>
        </Card>
    )
}

export default PcCaseCreateDialog
