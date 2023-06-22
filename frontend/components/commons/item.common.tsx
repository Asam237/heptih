import { ItemType } from "../../types"

export const Item = ({ description, icon, title }: ItemType) => {
    return (
        <div className="flex flex-col items-center pt-6">
            <div className="w-28 h-28 border rounded-3xl shadow-lg flex justify-center items-center">
                {icon}
            </div>
            <h4 className="pt-8 lg:pt-12 text-gray-700 text-base lg:text-xl font-semibold text-center">
                {title}
            </h4>
            <p className="text-gray-500 text-base pt-4 font-light text-center px-6">
                {description}
            </p>
        </div>
    )
}