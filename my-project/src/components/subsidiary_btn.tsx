type subsidiary_btn_props = {
    title: string,
    color: validColor
}

const validColors = ["orange", "pink", "purple", "blue", "gray", "green"]
export type validColor = typeof validColors[number]
const colorsmap: Record<validColor, string> = {
    orange : "bg-orange-200/20 border-orange-500",
    pink : "bg-pink-200/20 border-pink-500",
    purple : "bg-purple-200/20 bordder-purple-500",
    blue : "bg-blue-200/20 border-blue-500",
    gray : "bg-gray-200/20 border-gray-500",
    green : "bg-green-200/20 border-green-500",
    white : "bg-white-500/60 border-white-500"
}
const SubsidiaryBtn:React.FC<subsidiary_btn_props> = ({title, color}:subsidiary_btn_props)=>{
    
    return(
        <div className="flex items-center justify-center">
            <div className={`relative ${colorsmap[color]} border-1 rounded-4xl py-1 px-6`}>
                <button className="text-white text-sm font-light w-full h-full">{title}</button>
            </div>
        </div>
    )
}
export default SubsidiaryBtn