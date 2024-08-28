import React from "react"

interface SelectFieldProps {
    name: string
    register: any
    options: Array<{ value: string; label: string }>
    placeholder: string
    error: any
    label: string
}

const SelectField: React.FC<SelectFieldProps> = ({ name, register, options, placeholder, error, label }) => {
    return (
        <div className="form-field">
            <label htmlFor={name}>
                <b>{label}</b>
            </label>
            <select id={name} {...register(name)} className="form-input">
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <div className="error-message">{error.message}</div>}
        </div>
    )
}

export default SelectField
