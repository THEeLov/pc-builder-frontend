import CustomButton from "@/components/CustomButton/CustomButton"
import { Component } from "@/models/components"
import { MdDelete } from "react-icons/md"
import useAuthData from "../../hooks/useAuthData"
import { usePartialConfigEdit } from "@/hooks/usePartialConfig"
import { mapComponentToBody } from "@/utils/mapComponentToBody"
import "./build.css"

const ComponentInfo = ({ componentInfo, name }: { componentInfo: Component; name: string }) => {
    const { user } = useAuthData()
    const { mutateAsync: DeleteFromPartial } = usePartialConfigEdit(user?.id ?? "")

    const handleDelete = async () => {
        const data = mapComponentToBody(name, componentInfo, true)
        await DeleteFromPartial(data)
    }

    return (
        <>
            <div>
                <div className="component__info__image-container">
                    <img src={componentInfo.component.imageUrl} alt="not working" className="component__info__image" />
                </div>
            </div>
            <h3>{componentInfo.component.name}</h3>
            <h3 className="component__info__price">{componentInfo.component.price} €</h3>
            <div className="component__info__button" onClick={handleDelete}>
                <CustomButton label="" btype="secondary" icon={<MdDelete />} />
            </div>
        </>
    )
}

export default ComponentInfo
