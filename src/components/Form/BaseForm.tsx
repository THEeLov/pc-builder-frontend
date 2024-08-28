import React from "react"
import FormField from "./FormField"

// Any type in params should be changed but i dont know how
const BaseForm: React.FC<any> = ({ register, errors }) => {
    return (
        <div className="dialog-form__grid--first">
            <FormField
                name="component.name"
                register={register}
                type="text"
                placeholder="HyperX XC450"
                error={errors?.component?.name}
                label="Name"
            />
            <FormField
                name="component.price"
                register={register}
                type="number"
                placeholder="999"
                error={errors?.component?.price}
                label="Price"
            />
            <FormField
                name="component.manufacturer"
                register={register}
                type="string"
                placeholder="Bob's company"
                error={errors?.component?.manufacturer}
                label="Manufacturer"
            />
            <FormField
                name="image"
                register={register}
                type="file"
                placeholder="image"
                error={errors?.image}
                label="Image"
            />
        </div>
    )
}

export default BaseForm
