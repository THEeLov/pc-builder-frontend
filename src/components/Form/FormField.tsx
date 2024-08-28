import React from "react"
import "./formfield.css"

interface FormFieldProps {
    name: string
    register: any
    type: string
    placeholder: string
    error: any
    label: string
}

const FormField: React.FC<FormFieldProps> = ({ name, register, type, placeholder, error, label }) => {
    return (
        <div className="form-field">
            <label htmlFor={label}>
                <b>{label}</b>
            </label>
            <input id={label} {...register(name)} type={type} placeholder={placeholder} className="form-input" />
            {error && <div className="error-message">{error.message}</div>}
        </div>
    )
}

export default FormField
