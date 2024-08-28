import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../validationSchemas/auth"
import { Link, useNavigate } from "react-router-dom"
import { useRegister } from "@/hooks/useAuth"
import useAuthData from "../../hooks/useAuthData"
import Bob from "../../images/sign_UP_bob.png"
import "./register.css"
import FormField from "@/components/Form/FormField"

type FormFields = z.infer<typeof registerSchema>

const Register = () => {
    const { mutateAsync: RegisterMutation } = useRegister()
    const { login } = useAuthData()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        if (data.password !== data.confirmPassword) {
            setError("root", { message: "Passwords are not matching" })
            return
        }
        try {
            const response = await RegisterMutation(data)
            login(response)
            navigate("/")
        } catch (error) {
            setError("root", {
                message: "Something went wrong.",
            })
        }
    }

    return (
        <div className="register">
            <div className="register__logo">
                <Link to="/" className="register__logo__link">
                    <h1>PC Builder</h1>
                </Link>
            </div>
            <div className="register__container">
                <div className="register__form-container">
                    <h1 className="register__form-container__headline">Sign Up</h1>
                    <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
                        <FormField
                            name="username"
                            register={register}
                            type="text"
                            placeholder="mornrise"
                            error={errors.username}
                            label="Username"
                        />
                        <FormField
                            name="email"
                            register={register}
                            type="email"
                            placeholder="user@example.com"
                            error={errors.email}
                            label="Email"
                        />
                        <FormField
                            name="password"
                            register={register}
                            type="password"
                            placeholder="password"
                            error={errors.password}
                            label="Password"
                        />
                        <FormField
                            name="confirmPassword"
                            register={register}
                            type="password"
                            placeholder="confirm password"
                            error={errors.confirmPassword}
                            label="Confirm Password"
                        />

                        <button className="form-button" type="submit">
                            Sign Up
                        </button>

                        {errors.root && <div className="error-message">{errors.root.message}</div>}
                    </form>
                    <div className="register__form-container__questions">
                        <Link to="/login">Already have an accout ? Sign In</Link>
                    </div>

                    <div className="register-image">
                        <img className="register-bob" src={Bob} alt="not working" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
