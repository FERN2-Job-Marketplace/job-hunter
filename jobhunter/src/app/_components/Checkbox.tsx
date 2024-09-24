import { checkBoxTypeCategory, checkBoxTypeEmployment, checkBoxTypeRange } from "../constants/checkbox"

type Props = {
    selectedEmployment: string[]
    selectedCategory: string[]
    selectedSallary: string[], 
    handleCheckbox: (value : string, checkboxType : 'employment' | 'category' | 'sallary') => void
    handleApplyCheckbox: () => void
}

export default function Checkbox(props: Props){

    return(
        <div className="w-[20%]">
        <div>
            <h3 className="text-black font-semibold pb-4 ">Type of Employment</h3>
            {checkBoxTypeEmployment.map((value) => (
                <div className="flex items-center mb-4">
                    <input 
                        type="checkbox" 
                        value={value} 
                        checked={props.selectedEmployment.includes(value as string)} 
                        onChange={() => props.handleCheckbox(value as string, 'employment')}
                        className="checkbox checkbox-sm border-2 border-gray-300" />
                        <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm font-light text-gray-700"
                    >
                        {value}
                    </label>
                </div>
            ))}
        </div>
        <div>
            <h3 className="text-black font-semibold pb-4 pt-5">Categories</h3>
            {checkBoxTypeCategory.map((value) => (
                <div className="flex items-center mb-4">
                    <input 
                        type="checkbox" 
                        value={value} 
                        checked={props.selectedCategory.includes(value)} 
                        onChange={() => props.handleCheckbox(value, 'category')}
                        className="checkbox checkbox-sm border-2 border-gray-300" />
                        <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm font-light text-gray-700"
                    >
                        {value}
                    </label>
                </div>
            ))}
        </div>
        <div>
            <h3 className="text-black font-semibold pb-4 pt-5">Salary Range</h3>
            {checkBoxTypeRange.map((value) => (
                <div className="flex items-center mb-4">
                    <input 
                        type="checkbox" 
                        value={value} 
                        checked={props.selectedSallary.includes(value)} 
                        onChange={() => props.handleCheckbox(value, 'sallary')}
                        className="checkbox checkbox-sm border-2 border-gray-300" />
                        <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm font-light text-gray-700"
                    >
                        {value}
                    </label>
                </div>
            ))}
        </div>
        <button className=" bg-steel-blue w-fit text-white font-semibold text-base px-4 py-1" onClick={props.handleApplyCheckbox} >Apply</button>
    </div>
    )
}