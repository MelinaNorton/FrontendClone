type subsidiary_btn_props = {
    title: string,
    color: validColor
}

const validColors = ["orange", "pink", "purple", "blue", "grey", "green"]
type validColor = typeof validColors[number]
const SubsidiaryBtn:React.FC<subsidiary_btn_props> = ({title, color}:subsidiary_btn_props)=>{
    
    return(
        <div className="flex items-center justify-center p-4">
            <div className={`relative bg-${color}-200/10 border-1 border-${color}-500`}>
                <button className="text-white text-sm font-light w-full h-full">{title}</button>
            </div>
        </div>
    )
}
export default SubsidiaryBtn