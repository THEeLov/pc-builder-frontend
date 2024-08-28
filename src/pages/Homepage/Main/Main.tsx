import "./main.css"

import CustomButton from "../../../components/CustomButton/CustomButton"
import { ToolOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import useAuthData from "../../../hooks/useAuthData"
import { notification } from "antd"

const Main = () => {
    const navigate = useNavigate()
    const { user } = useAuthData()

    const handleClick = () => {
        if (user === null) {
            notification.error({
                message: "Ooops!",
                description: "Please log in to continue",
                duration: 2.5,
            })
            return
        }
        navigate(`/options`)
    }

    return (
        <main className="main">
            <div className="main-content">
                <h1>Build Your PC</h1>
                <p>
                    Select from the best components, fine-tune your specs, and create a PC that's uniquely yours. No
                    compromises, just pure performance. Our intuitive process makes building your ultimate machine
                    simple and enjoyable.
                </p>
                <div className="main-button">
                    <div onClick={handleClick}>
                        <CustomButton label="Lets start" icon={<ToolOutlined />} btype="primary" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
